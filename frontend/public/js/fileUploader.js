class FileUploader {
    constructor({uploadUrl,dropAreaId, fileElemId, linkBoxId, isMultiple, uploadType, popupId, closeBtnId,callback}) {
        this.uploadUrl = uploadUrl;
        this.dropArea = document.getElementById(dropAreaId);
        this.fileElem = document.getElementById(fileElemId);
        this.linkBox = document.getElementById(linkBoxId);

        this.fileType(isMultiple)
        this.uploadType = uploadType;
        this.uploadPopup = document.getElementById(popupId);
        this.btnClosePopup = document.getElementById(closeBtnId);
        this.isMultiple = isMultiple;

        this.callback = callback;  // 콜백 함수 저장
        this.initEventListeners();
    }

    // 파일 타입 설정
    fileType(isMultiple) {
        this.fileElem.multiple = isMultiple;
        // return isMultiple ? '/api/uploads' : '/api/upload';
    }

    // 이벤트 리스너 초기화
    initEventListeners() {
        // 파일 선택 후 업로드 처리
        this.fileElem.addEventListener('change', (e) => {
            const files = e.target.files;
            this.handleFiles(files);
        });
        // console.log(this.dropArea);
        // drag & drop 처리
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            this.dropArea.addEventListener(eventName, this.preventDefaults, false);
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            this.dropArea.addEventListener(eventName, () => this.dropArea.classList.add('highlight'), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            this.dropArea.addEventListener(eventName, () => this.dropArea.classList.remove('highlight'), false);
        });

        this.dropArea.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            this.handleFiles(files);
        });

        // 팝업 닫기
        this.btnClosePopup.addEventListener('click', () => {
            this.closePopup();
        });
    }

    preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    async handleFiles(files, callback = null) {
        const formData = new FormData();
        formData.append("upload_type", this.uploadType);
        // console.log(this.uploadType);
        for (let file of files) {
            formData.append('uploadfiles', file); // 서버에서 받을 필드명과 일치해야 함
        }

        this.showPopup();

        try {
            const response = await fetch(this.uploadUrl, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            // 에러 처리
            if (result.state == 'err') {
                throw new Error(result.msg || "알 수 없는 에러가 발생했습니다. 관리자에게 문의해주세요.");
            }

            // 파일 업로드 후 링크 표시
            this.displayUploadLinks(result.data);
            this.closePopup();

            
            // 콜백 함수 실행 (화살표 함수로 넘겨진 sendGetRequest가 실행됨)
            if (this.callback && typeof this.callback === 'function') {
            this.callback();  // 여기서 화살표 함수가 실행되고 sendGetRequest가 호출됨
            }

        } catch (error) {
            alert(error);
            this.closePopup();
        }
    }

    displayUploadLinks(fileInfo) {
        if (this.linkBox) {
            this.linkBox.style.display = 'block';
            const hostUrl = window.location.host;

            for (let key in fileInfo) {
                const uploadLinkTag = `<p><a href="/file/${fileInfo[key]}" target="_blank">${key}</a><br><span>${hostUrl}/file/${fileInfo[key]}</span></p>`;
                this.linkBox.innerHTML += uploadLinkTag;
            }
        }
    }

    showPopup() {
        this.uploadPopup.classList.remove('hidden'); // 팝업 표시
    }

    closePopup() {
        this.uploadPopup.classList.add('hidden'); // 팝업 숨기기
    }
}

