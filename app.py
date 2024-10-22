# 사용자 질문에 답변을 제공하는 AI 챗봇 시스템을 구축하는 Python 프로그램

########################### 라이브러리 선언 ###########################

### 파일 및 디렉토리 작업 관련 라이브러리 
import os  # 파일 접근을 도와주는 라이브러리
import pandas as pd # csv파일 작업을 위한 라이브러리
import shutil
import time  # 시간 측정을 위한 모듈

### langchain 관련 라이브러리
from langchain_community.llms import Ollama # Ollama LLM 모델 호출

from langchain_core.messages import ChatMessage  # 대화 메시지 관련 라이브러리
from langchain_core.prompts import (
                                    ChatPromptTemplate,  # 대화형 프롬프트 템플릿 생성
                                    MessagesPlaceholder  # 메시지 자리 표시자 
                                    )
from langchain.chains import create_history_aware_retriever  # 대화 기록을 고려하여 정보를 검색하는 체인 생성
from langchain.chains.combine_documents import create_stuff_documents_chain  # 여러 문서를 결합하는 체인 생성
from langchain.chains import create_retrieval_chain  # 정보를 검색하는 체인 생성
# from langchain_community.document_loaders.unstructured import UnstructuredFileLoader  # 구조화되지 않은 파일을 로드하고 처리
# from langchain.storage import LocalFileStore  # 로컬 파일 저장소를 통해 파일 관리
# from langchain_text_splitters import RecursiveCharacterTextSplitter  # 텍스트를 재귀적으로 분리하여 처리
# from langchain.embeddings import CacheBackedEmbeddings  # Embedding 모델을 캐시 백엔드로 관리
from langchain_community.vectorstores import Chroma  # 문서들을 벡터 스토어로 변환하여 관리
from langchain_huggingface import HuggingFaceEmbeddings # Hugging Face의 Transformers를 사용하여 Embedding 처리
from langchain.schema import Document # Document 클래스
# import tiktoken  # 텍스트를 토큰 단위로 분할하는 도구 제공 
from sklearn.feature_extraction.text import TfidfVectorizer  # 텍스트 데이터를 TF-IDF 벡터로 변환하는 도구
from sklearn.metrics.pairwise import cosine_similarity  # 두 벡터 간 코사인 유사도를 계산하는 도구

### 캐시 관련 라이브러리
from cachetools import TTLCache # Time-To-Live 캐시 제공

### 비동기 작업 및 FastAPI 서버 관련 라이브러리
from fastapi import FastAPI, BackgroundTasks, HTTPException # FastAPI와 비동기 작업을 위한 BackgroundTasks 라이브러리
from fastapi.middleware.cors import CORSMiddleware  # CORS 미들웨어
from fastapi.responses import JSONResponse #임시 
from pydantic import BaseModel  # 데이터 유효성 검사를 위한 Pydantic 모델 
from pyngrok import ngrok  # ngrok을 통해 로컬 서버를 공개
import uvicorn  # ASGI 서버 실행
import nest_asyncio  # 비동기 작업 관련 오류를 방지
import requests
# import asyncio  # 비동기 작업

### 사용자 정의 함수 관련 라이브러리
from commonFunc.ragFunc import cf # 함수 모음

########################### 1. 파라미터 설정 ###########################

### 파라미터 설정 CSV 파일 경로
parameter_file_path = "../dataset/parameter/parameter.csv"

### parameter 변수 선언
# csv파일의 내용을 dataframe 형식으로 변환
df = pd.read_csv(parameter_file_path)

# DataFrame 열 이름을 변수로 설정
parameter_col = 'parameter'
value_col = 'value'
type_col = 'type'

# parameters 리스트를 DataFrame에서 가져오기
parameters = df[parameter_col].tolist()

# df의 parameter 값을 코드 형태 문자열로 변환 및 코드 실행
try:
    # 모든 parameter가 DataFrame에 존재하는지 확인
    if all(param in parameters for param in parameters):
        # 각 parameter의 값을 변수로 선언하는 코드 문자열 생성
        variable_declarations = "\n".join([
            f"{row[parameter_col]} = {row[value_col]!r}" if row[type_col] == "str" else
            f"{row[parameter_col]} = {float(row[value_col])}" if row[type_col] == "float" else
            f"{row[parameter_col]} = {int(row[value_col])}" if row[type_col] == "int" else
            f"{row[parameter_col]} = {row[value_col]}"
            for _, row in df.iterrows()
        ])

        exec(variable_declarations)  # variable_declarations에 저장된 코드 선언
    else:
        raise ValueError("does not contain all required parameters.")
except Exception as e:
    print(e)

### cache 디렉토리 생성
os.makedirs(embeddings_dir, exist_ok = True) # 같은 텍스트를 다시 임베딩할 때 시간을 절약하기 위해 캐시 사용

# 대화 기록 메모리 캐시 설정
cache = TTLCache(
                maxsize = cache_size, # cache 크기 (항목)
                ttl = cache_time # cache 유지 시간(초)
                )

# 대화 내용이 저장된 리스트 초기화
conversation_history = [] 

########################### 2. LLM 모델 호출 ###########################
ollama = Ollama(
                model = llm_model, # EEVE-Korean-10.8B:latest   
                num_gpu = 1, # 사용할 GPU 수로 macOS에서는 기본적으로 메탈 지원을 활성화하려면 1이고 비활성화하려면 0
                temperature = llm_model_temperature, # 0.2 llm model의 텍스트의 다양성 정도
                ) # 생성된 텍스트의 다양성 조절

model_name = embedding_model # jhgan/ko-sroberta-nli
model_kwargs = {"device": "cuda"} # GPU 설정
encode_kwargs = {"normalize_embeddings": True} # 정규화
embeddings = HuggingFaceEmbeddings(
                                    model_name=model_name, # jhgan/ko-sroberta-nli
                                    model_kwargs=model_kwargs,
                                    encode_kwargs=encode_kwargs,
                                    )

########################### 3. 벡터DB 호출 ###########################
vectorstore = Chroma(
                    embedding_function = embeddings, # 임베딩 함수 설정
                    persist_directory = db_dir, # 벡터 저장 디렉토리 경로 설정
                    collection_name = "durian" # 컬렉션 이름 설정. 이 프로젝트에서는 컬렉션 1개만 사용
                    )

### 검색기
retriever = vectorstore.as_retriever( # 벡터 저장소를 검색기로 변환
                                    search_type = "mmr", # Maximum Marginal Relevance (MMR)
                                    # vervose=True, # 상세한 출력을 활성화하는 매개변수
                                    search_kwargs = {'k': sources_num, 'lambda_mult': 0.7} # 출력 개수 sources_num, 일관성 정도 설정(1에 가까울 수록 일관적인 답변 반환)
                                    )

########################### 4. API 서버 기동 (FastAPI) ###########################
### FastAPI 웹서버 설정 & 사용자 요청 처리
app = FastAPI(
    title="Python durian Assistant", 
    version="1.0",
    description="API Server"
)

### CORS 미들웨어 
origins = ["*"] # 모든 출처 허용

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 모든 출처 허용
    allow_credentials=True, # 자격 증명 허용
    allow_methods=["*"],  # 모든 HTTP 메소드 허용
    allow_headers=["*"],  # 모든 HTTP 헤더 허용
    # expose_headers=["*"], # 모든 HTTP 헤더 노출
)

### FastAPI 연계 확인을 위한 데이터 모델 정의
class Input(BaseModel):
    input: str # 사용자 입력 저장 필드

########################### 5. 서버 기동상태 확인 ###########################
### 연결 확인용 엔드포인트
@app.get("/")
async def root():
    return {"message": "online"}

### 데이터셋 업데이트를 처리하는 엔드포인트
@app.get("/update")
async def update():
    global retriever

    try:
        update_start_time = time.time()  # 업데이트 시작 시간

        # PDF 파일을 업로드 한 경우
        if not cf.check_files_in_folder(org_dir):  # org_dir 폴더에 파일이 없는 경우
            return {"message": "no files in org_dir"}

        # 현재 filelist.csv의 백업 생성
        if os.path.exists(filelist_path):
            shutil.copyfile(filelist_path, backup_filelist_path)

        new_files = cf.get_new_pdf_files(org_dir, filelist_path)  # 새로운 PDF 파일 목록 가져오기

        # 새로운 파일이 없는 경우
        if len(new_files) == 0:
            cf.restore_backup(filelist_path, backup_filelist_path)
            return {"message": "no new pdf files found"}

        # 새로운 PDF 파일로 검색기 생성
        retriever = cf.make_new_retriever(
            filelist_path,
            backup_filelist_path,
            org_dir,
            new_files,
            embeddings_dir,
            embeddings,
            chunk_size,
            chunk_overlap,
            sources_num,
            db_dir,
            token_model,
            collection_name,
        )

        if retriever is None:  # retriever가 생성되지 않은 경우
            return {"message": "update failed during retriever creation"}

        update_end_time = time.time()
        update_duration = update_end_time - update_start_time  # 전체 업데이트 소요 시간
        print(f"전체 업데이트 소요 시간: {update_duration:.2f} 초")

        return {"message": "update complete"}

    except Exception as e:
        cf.restore_backup(filelist_path, backup_filelist_path)
        return {"message": f"update failed. {e}"}

@app.get("/temp/list")
async def temp_list():
    global retriever

    # state 값을 추가한 JSON 응답 생성
    responseContent = {
        "state": "success",
        "data": None  
    }

    try:
        # DataFrame을 딕셔너리로 변환
        df = pd.read_csv(".cache/filelist.csv")
        if len(df) != 0:
            responseContent["data"] = df.to_dict(orient='records')  # 각
        else:
            responseContent["state"] = "fail"
            responseContent["data"] = {"filename":"현재 저장된 파일이 없습니다."}

        return JSONResponse(content=responseContent)
    
    except FileNotFoundError as e:  # 파일이 없는 경우의 예외 처리
        responseContent["state"] = "fail"
        responseContent["data"] = {"filename":"현재 저장된 파일이 없습니다."}
        return JSONResponse(content=responseContent)
    except Exception as e:
        responseContent["state"] = "err"
        responseContent["data"] = str(e)
        return JSONResponse(content=responseContent)
        
@app.get("/temp/update")
async def temp_update():
    global retriever
    # DataFrame을 딕셔너리로 변환
    # state 값을 추가한 JSON 응답 생성
    responseContent = {
        "state": "success",
        "data": None  
    }
    try:
        update_start_time = time.time()  # 업데이트 시작 시간
        # PDF 파일을 업로드 한 경우
        if not cf.check_files_in_folder(org_dir):  # org_dir 폴더에 파일이 없는 경우
            return {"message": "no files in org_dir"}

        # filelist.csv로드
        if os.path.exists(filelist_path):
            shutil.copyfile(filelist_path, backup_filelist_path)

        new_files = cf.get_new_pdf_files(org_dir, filelist_path)  # 새로운 PDF 파일 목록 가져오기

        # 새로운 파일이 없는 경우
        if len(new_files) == 0:
            cf.restore_backup(filelist_path, backup_filelist_path)
            responseContent["state"] = "err"
            responseContent["data"] = "기존에 업로드된 pdf파일입니다."
            return JSONResponse(content=responseContent)
           

        # 새로운 PDF 파일로 검색기 생성
        retriever = cf.make_new_retriever(
            filelist_path,
            backup_filelist_path,
            org_dir,
            new_files,
            embeddings_dir,
            embeddings,
            chunk_size,
            chunk_overlap,
            sources_num,
            db_dir,
            token_model,
            collection_name,
        )

        if retriever is None:  # retriever가 생성되지 않은 경우
            return {"message": "update failed during retriever creation"}

        update_end_time = time.time()
        update_duration = update_end_time - update_start_time  # 전체 업데이트 소요 시간
        print(f"전체 업데이트 소요 시간: {update_duration:.2f} 초")
        

        try:
            # DataFrame을 딕셔너리로 변환
            df = pd.read_csv(".cache/filelist.csv")
            if len(df) != 0:
                responseContent["data"] = df.to_dict(orient='records')  # 각
            else:
                responseContent["state"] = "fail"
                responseContent["data"] = {"filename":"현재 저장된 파일이 없습니다."}

            return JSONResponse(content=responseContent)
    
        except FileNotFoundError as e:  # 파일이 없는 경우의 예외 처리
            responseContent["state"] = "fail"
            responseContent["data"] = {"filename":"현재 저장된 파일이 없습니다."}
            return JSONResponse(content=responseContent)
        except Exception as e:
            responseContent["state"] = "err"
            responseContent["data"] = str(e)
            return JSONResponse(content=responseContent)
        
    except Exception as e:
        cf.restore_backup(filelist_path, backup_filelist_path)
        responseContent["state"] = "err"
        responseContent["data"] = str(e)
        return JSONResponse(content=responseContent)


### 사용자의 질문에 대한 응답을 처리하는 엔드포인트 
@app.post("/answer", status_code=200)
async def answer(x: Input, background_tasks: BackgroundTasks):
    global retriever
    
    user_input = x.input # 사용자 입력
    cf.add_history(conversation_history, 'user', user_input ) # 사용자 입력을 대화 히스토리에 추가

    answer_start_time = time.time()  # 답변 생성 시작 시간

    # 시스템 프롬프트 템플릿
    contextualize_q_prompt = ChatPromptTemplate.from_messages(
                                                                [
                                                                    ("system", system_prompt), 
                                                                    MessagesPlaceholder("chat_history"),
                                                                    ("human", "{input}"),
                                                                ]
                                                            )

    # 대화 기록을 참고한 검색기 생성
    history_aware_retriever = create_history_aware_retriever(
                                                                ollama, # LLM 모델 
                                                                retriever,# 검색기
                                                                contextualize_q_prompt # 시스템 프롬프트 템플릿 
                                                            )

    # QA 프롬프트 템플릿
    qa_prompt = ChatPromptTemplate.from_messages(
                                                    [
                                                        ("system", qa_system_prompt), 
                                                        MessagesPlaceholder("chat_history"),
                                                        ("human", "{input}"),
                                                    ]
                                                )

    # 질문-답변 체인 생성
    question_answer_chain = create_stuff_documents_chain(
                                                            ollama, # LLM 모델
                                                            qa_prompt # QA 프롬프트 템플릿
                                                        )

    # 검색 및 질문-답변 체인 생성
    rag_chain = create_retrieval_chain(
                                        history_aware_retriever, # 대화 기록을 참고한 retriever
                                        question_answer_chain # 질문-답변 체인
                                        )

    # 캐싱된 응답이 있는지 확인
    cache_start_time = time.time()

    cached_response = cache.get(user_input)
    if cached_response:
        cache_duration = time.time() - cache_start_time
        print(f"캐시 확인 소요 시간: {cache_duration:.2f} 초")

        return cached_response  # 캐시된 응답 반환

    # 캐싱된 응답이 없을 경우 
    try:
        result = rag_chain.invoke({
                                    "input": user_input, # 사용자 입력
                                    "chat_history": conversation_history # 대화 기록
                                    })
        print(result)
        answer_duration = time.time() - answer_start_time
        print(f"RAG Chain 호출 및 답변 생성 소요 시간: {answer_duration:.2f} 초")

    # except requests.ConnectionError as e:
    #     raise HTTPException(status_code=503, detail=f"Connection error: {e}")
    except Exception as e:
        result = {"answer": f"Error invoking chain: {e}", "context": []}

    # try:
        # search_results = retriever.get_relevant_documents(user_input)  # 사용자 입력과 관련된 문서 검색

        # # 검색된 문서에서 파일명과 관련 부분 추출
        # result["context"] = []
        # for doc in search_results:
        #     file_name = os.path.basename(doc.metadata.get("source", "Unknown source"))  # 파일명만 추출
            
        #     # 검색한 내용과 가장 가까운 부분을 찾기 위해 문서를 500자 단위로 분할
        #     chunks = [doc.page_content[i:i+500] for i in range(0, len(doc.page_content), 500)]
            
        #     # 검색어와 각 청크의 유사도를 계산하여 가장 유사한 청크(500)를 찾음
        #     vectorizer = TfidfVectorizer().fit_transform([user_input] + chunks)
        #     vectors = vectorizer.toarray()
        #     cosine_similarities = cosine_similarity(vectors[0:1], vectors[1:]).flatten()
        #     most_relevant_index = cosine_similarities.argmax()  # 유사도가 가장 높은 청크의 인덱스
            
        #     # 가장 유사한 청크를 출력하도록 설정
        #     relevant_text = chunks[most_relevant_index]
        #     result["context"].append({"content": relevant_text, "source": file_name})
        
        # # print(f"Search results for '{user_input}': {search_results}")

    # except Exception as e:
    #     result = {"answer": f"Error invoking chain: {e}", "context": []}

    response_content = result.get("answer") or "No answer available"  # 응답 내용 가져오기
    # context 가져오기 및 처리
    response_context = result.get("context") or [Document(metadata={}, page_content="No page_context available")] # 응답 출처 가져오기

    # 대화 히스토리에 응답 추가
    cf.add_history(conversation_history, 'assistant', response_content)
    cf.print_history(conversation_history)  # 대화 히스토리 출력

    # source와 page 추출
    documents_info = []

    for doc in response_context:
        source = doc.metadata.get('source') or 'No source available'
        page = doc.metadata.get('page') or 'No page available'
        page_content = doc.page_content if doc.page_content is not None else 'No page_content available'  # page_content 추출 및 예외 처리

        # PDF 파일명만 추출
        pdf_filename = os.path.basename(source) if source != 'No source available' else 'No source available'

        documents_info.append((pdf_filename, page, page_content))

    # 캐시에 응답 저장
    cache[user_input] = {"answer": response_content}  # 사용자의 입력에 대한 응답 내용을 초기화합니다.

    # 반환 데이터 생성
    response_data = {"answer": response_content}  # 사용자의 입력에 대한 응답 내용을 초기화합니다.

    # 문서 정보에서 출처와 페이지 추가
    for i, (pdf_filename, page, page_content) in enumerate(documents_info, start=1):
        # 캐시에 출처와 페이지 추가
        cache[user_input][f"source{i}"] = pdf_filename  # 출처를 캐시에 저장합니다.
        cache[user_input][f"page{i}"] = page      # 페이지를 캐시에 저장합니다.
        cache[user_input][f"page_content{i}"] = page_content      # 페이지를 캐시에 저장합니다.

        # 반환 데이터에 출처와 페이지 추가
        response_data[f"source{i}"] = pdf_filename      # 출처를 반환 데이터에 추가합니다.
        response_data[f"page{i}"] = page          # 페이지를 반환 데이터에 추가합니다.
        response_data[f"page_content{i}"] = page_content          # 페이지를 반환 데이터에 추가합니다.

    return response_data

########################### 6. 화면 요청에 따른 응답 처리 ###########################
### 서버 실행
if __name__ == "__main__":
    # auth_token = "2hh3Mm8gYcKraX61b2Uj9YiU1hx_7nMicgfWBRVUjQTUtBYAv"  
    # ngrok.set_auth_token(auth_token)  # ngrok에 인증 토큰 적용
    # ngrokTunnel = ngrok.connect(8000)  # ngrok을 통해 로컬 서버를 공개하고 터널 생성
    # print("Public URL:", ngrokTunnel.public_url)  # ngrok 터널을 통해 접근할 수 있는 공개 URL 출력
    nest_asyncio.apply()  # 비동기 작업 관련 오류 방지를 위해 nest_asyncio 적용
    uvicorn.run(app,host="0.0.0.0", port=8000)  # uvicorn을 사용하여 FastAPI 서버 실행