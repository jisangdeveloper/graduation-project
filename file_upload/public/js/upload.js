const dropArea = document.getElementById('drop-area');
const fileElem = document.getElementById('input_file');
const linkBox = document.getElementById('link-box');

const isMultiple = true; //단일 업로드인지, 다중 업로드인지
const uploadUrl = fileType(isMultiple); //단일 업로드, 다중 업로드 서버 url
const uploadedLink = document.getElementById('uploaded-link');

const uploadPopup = document.getElementById('uploadPopup');
const btnClosePopup = document.getElementById('closePopup');

// 파일 선택 후 업로드 처리
fileElem.addEventListener('change', (e) => {
    const files = e.target.files;
    handleFiles(files);
});

// drag & drop 처리

// drag & drop시 새창이 열리고 viewer 역할을한다.
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false);
});

dropArea.addEventListener('drop', (e) => {
    const dt = e.dataTransfer
    const files = dt.files;
    handleFiles(files);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation(); // 이벤트 전파: 버블링 캡처링 방지
}

// 파일 타입 속성 제어
function fileType(isMultiple){
    fileElem.multiple = isMultiple;
    return isMultiple? '/api/uploads':'/api/upload'
}

async function handleFiles(files) {
    const formData = new FormData();
    // 다중 파일 formData에 추가
    for (let file of files) {
        formData.append('uploadfiles', file); // 'uploadfiles'는 서버에서 받을 필드명과 일치해야 함
    }
    // console.log(files[0])
    showPopup();

    try {
        const response = await fetch(uploadUrl, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        //에러 처리
        if(result.state=='err'){
            if(result.code=='unknown'){
                throw new Error("알수없는 에러가 발생했습니다. 관리자에게 문의해주세요.")
            }else{
                throw new Error(result.msg)
            }
        }

        // 파일 업로드 후 링크 표시
        linkBox.style.display = 'block';
        
        const fileInfo = result.data;
        const hostUrl = window.location.host;
        for (let key in fileInfo) {
            const uploadLinkTag = `<p><a href="/file/${fileInfo[key]}" id="uploaded-link" target="_blank">${key}</a><br><span>${hostUrl}/file/${fileInfo[key]}</span></p>`;
            linkBox.innerHTML += uploadLinkTag;
        }
        closePopup();
    } catch (error) {
        // console.log(`File upload failed. ${error}`);
        alert(error);
        closePopup();
    }
}

function showPopup() {
    uploadPopup.classList.remove('hidden'); // 팝업 표시
}

function closePopup() {
    uploadPopup.classList.add('hidden'); // 팝업 표시
}

//팝업
btnClosePopup.addEventListener('click', () => {
closePopup(); // 팝업 숨기기
});