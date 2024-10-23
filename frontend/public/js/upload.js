// 일반 업로더
const uploader1 = new FileUploader({
  uploadUrl: '/api/uploads',
  dropAreaId: 'drop_area',
  fileElemId: 'input_file',
  linkBoxId: 'link-box', // 파일 업로드 후 링크를 표시할 박스
  isMultiple: true, // 다중 파일 업로드 여부
  uploadType: 'upload', // 업로드 타입 (일반 파일 업로드)
  popupId: 'uploadPopup', // 업로드 진행 중 팝업 표시 ID
  closeBtnId: 'closePopup' // 팝업 닫기 버튼 ID
});


// 채팅 파일 업로더
const uploader2 = new FileUploader({
  uploadUrl: '/api/uploads',
  dropAreaId: 'chat_drop_area',
  fileElemId: 'chat_input_file',
  linkBoxId: null, 
  isMultiple: true, 
  uploadType: 'chat_upload',
  popupId: 'loadingOverlay',
  closeBtnId: 'closePopup',
  callback: sendGetRequest // 업로드 후 호출할 함수
});

 // 파일 리스트를 렌더링하는 함수
 function renderFileList(files) {
      const fileListTag = document.getElementById('fileList');

      fileListTag.innerHTML = ''; // 기존 내용을 지우고 새로 추가

      // 파일 데이터를 순회하면서 리스트 항목 생성
      files.forEach(file => {
        //   console.log(file);
          const listItem = document.createElement('li');
          const fileNameSpan = document.createElement('span');
          fileNameSpan.textContent = file.filename;
          listItem.appendChild(fileNameSpan);
          fileListTag.appendChild(listItem);
      });
  }
// 클래스 외부에서 GET 요청 처리
async function sendGetRequest(url = "http://localhost:8000/user-update") {
    try {
        uploader2.showPopup(); // 로딩 팝업 표시
        const response = await fetch(url, { method: 'GET' });
        const fileList = await response.json();
        uploader2.closePopup(); // 로딩 팝업 닫기

        // 파일 리스트를 렌더링하는 함수 호출
        if (fileList['state']=='success' && fileList['data']) {
          renderFileList(fileList['data']);
        }else if(fileList['state']=='fail') {
          renderFileList([fileList['data']]); //filename: "현재 저장된 파일이 없습니다."
        }else{
          alert(fileList['data']);
        }
    } catch (error) {
        console.error('GET 요청 중 오류 발생:', error);
        uploader2.closePopup(); // 로딩 팝업 닫기
    }
}

  // 파일 리스트를 가져오는 함수
  async function getFileList() {
      try {
          // 서버에서 파일 리스트 받아오기
          const fileList = await sendGetRequest("http://localhost:8000/list");
          // sendGetRequest에서 이미 renderFileList를 호출하므로 여기서는 처리하지 않음
          // document.getElementById("loadingOverlay").style.display="block"
      } catch (error) {
          console.error('파일 리스트를 가져오는 중 오류 발생:', error);
      }
  }

 

  getFileList(); // 파일 리스트 가져오기