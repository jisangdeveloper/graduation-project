const path = require("path");
const http = require("http");
const { upload, uploadErrorHandler } = require('./modules/fileUpload');

const express = require("express");
const app = express();
const server = http.createServer(app);

/*
  !주의 사항
  1.modules/fileUpload.js 경로 설정 필수,본인이 사용하는 파일 업로드 개수에 따라 커스텀 필요
  2.public/js/upload.js 1.modules/fileUpload.js 와 uploadType일치 필요
  3.public/js/chatbot.js LLM모델의 url 설정 필요
 */


// 정적파일 미들웨어
app.use(express.static(path.join(__dirname, "public")));

// 'upload' 폴더를 정적 파일로 제공, '/file' 경로에 연결
app.use('/file', express.static(path.join(__dirname, 'upload')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/main.html"));
  });

app.get("/smart_main", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/main.html"));
});

app.get("/smart_chatbot", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/chatbot.html"));
});

/*파일업로드*/
app.get('/file-upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'file_upload.html'));
});

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
  },
  uploadErrorHandler);


function parseFile(files){
  fileUrls = {};
  for (let file of files) {
      //한글 파일 깨지는 문제 발생
      const utf8FileName = Buffer.from(file.originalname, 'latin1').toString('utf8');
      fileUrls[utf8FileName] = file.filename
  }
  return fileUrls;
}


app.listen(3011, () => {
  console.log("Server is running on http://localhost:3011");
});
