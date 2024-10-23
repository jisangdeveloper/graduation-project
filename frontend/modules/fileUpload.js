/*multer 라이브러리 사용 */
// https://www.npmjs.com/package/multer

const multer = require('multer');
const path = require('path');



// 업로드 경로 설정
const upload_url="upload/";
const chat_upload_url="upload2/";
const uploadDirs = [upload_url,chat_upload_url];

// 업로드 폴더가 없을 경우 생성
const fs = require('fs');

uploadDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true }); // 폴더가 없으면 생성
  }
});

// 파일 저장 경로 및 파일명 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const upload_type = req.body.upload_type;
      let upload_dir = upload_url; // 기본 저장 경로
      
      if (upload_type === 'chat_upload') {
        upload_dir = chat_upload_url; // 특정 업로드 경로
      }
      cb(null, upload_dir); // 파일이 저장될 디렉토리 설정
    },
    filename: (req, file, cb) => {
      const utf8FileName = Buffer.from(file.originalname, 'latin1').toString('utf8');
      cb(null, utf8FileName); // 저장되는 파일명 설정
    }
  });

  const fileSize = 20;

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * fileSize // (바이트 단위) 20MB로 파일 크기 제한
    },
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase(); // 파일 확장자 확인
      const mimeType = file.mimetype; // MIME 타입 확인
      
        // 허용할 확장자와 MIME 타입 목록
      const allowedExtensions = ['.jpeg', '.jpg', '.png', '.gif', '.pdf', '.ppt', '.pptx', '.docs', '.docx'];
      const allowedMimeTypes = [
        'image/jpeg', 'image/jpg', 'image/png', 'image/gif',
        'application/pdf', 'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
  
      if (allowedExtensions.includes(ext) && allowedMimeTypes.includes(mimeType)) {
        return cb(null, true); // 허용된 파일
      } else {
        return cb(new multer.MulterError('LIMIT_FILE_TYPE', file.mimetype), false);
      }
    }
  });


  
// 파일 업로드 에러 핸들러
function uploadErrorHandler(err, req, res, next) {
    let msg = err;  
  
    if (err instanceof multer.MulterError) {
      // Multer 에러 처리
      if (err.code === 'LIMIT_FILE_SIZE') {
        msg = ` 최대 파일 크기 ${fileSize}MB를 초과하였습니다.`;  
      }else if (err.code === 'LIMIT_FILE_TYPE') {
        msg = `명시된 파일 확장자만 첨부 가능합니다.`;  
      }else if(err.code === 'LIMIT_UNEXPECTED_FILE'){
        msg = `한번에 12개까지 첨부가 가능합니다.`;  
      }else{
        err.code = "unknown"
      }
      return res.json({state:'err',code:err.code,msg:msg});
    } else if (err) {
      // 일반 에러 처리
      return res.json({state:'err',code:"unknown",msg:err});
    }
  }
  
// module.exports로 내보냄
module.exports = {
    upload,
    uploadErrorHandler
};