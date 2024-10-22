const express = require('express');
const multer = require('multer');
const path = require('path'); // 경로 관리를 위한 모듈
const app = express();
const port = 3000;

// 정적 파일을 제공할 폴더 설정
app.use(express.static('public'));

// 'upload' 폴더를 정적 파일로 제공, '/file' 경로에 연결
app.use('/file', express.static(path.join(__dirname, 'upload')));

// index.html 파일 제공
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'file_upload.html'));
});

app.get('/file-upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'file_upload.html'));
});


// 업로드된 파일들을 저장할 폴더 설정
const fs = require('fs');
const uploadDir = './upload';
if (!fs.existsSync(uploadDir)) {
fs.mkdirSync(uploadDir); // 'uploads' 폴더가 없으면 생성
}

// 파일 저장 경로 및 파일명 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(1111);
    cb(null, 'upload/'); // 파일이 저장될 디렉토리
  },
  filename: (req, file, cb) => {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // 파일 이름을 Buffer로 받아 UTF-8로 변환
   cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // 저장되는 파일명 설정
  }
});


/*업로드 관련 처리 */

// multer 설정
// 파일 필터 및 크기 제한
const fileSize = 20;
// const fileSizeMent = "20MB" ;
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * fileSize // 2MB로 파일 크기 제한
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


function parseFile(files){
  fileUrls = {};
  for (let file of files) {
      //한글 파일 깨지는 문제 발생
      const utf8FileName = Buffer.from(file.originalname, 'latin1').toString('utf8');
      fileUrls[utf8FileName] = file.filename
  }
  return fileUrls;
}



// 파일 한개 업로드 처리
app.post('/api/upload', upload.single('uploadfiles'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    res.json({ state: 'success', data: parseFile(req.file)});
  }, uploadErrorHandler);

// 다중 파일 업로드 처리
app.post('/api/uploads', upload.array('uploadfiles',12), (req, res) => { 
    if (!req.files) {
        return res.status(400).send('No file uploaded.');
    }
    res.json({ state: 'success', data: parseFile(req.files)});
  }, uploadErrorHandler);





// 파일 업로드 에러 핸들러
function uploadErrorHandler(err, req, res, next) {
let msg = err;  
if (err instanceof multer.MulterError) {
  // Multer 에러 처리
  console.log(err.code);
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
next();
}
// 단축 URL 리디렉션
// app.get('/file/:shortUrl', (req, res) => {
//     const shortUrl = req.params.shortUrl;
//     const longUrl = `/file/${shortUrl}`;
//     if (longUrl) {
//       res.redirect(longUrl); // 원래 URL로 리디렉션
//     } else {
//       res.status(404).send('URL not found');
//     }
// });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

