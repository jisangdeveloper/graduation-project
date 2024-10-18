const path = require("path");
const http = require("http");

const express = require("express");
const app = express();
const server = http.createServer(app);

// Express.js와 같은 Node.js 서버를 사용할 때, 정적 파일(CSS, JS, 이미지 등)을 올바르게 제공하기 위해 express.static 미들웨어를 사용
// 이 미들웨어를 통해 특정 디렉토리를 "정적 파일"로 서빙하도록 설정할 수 있음
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/smart_main", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/main.html"));
});

app.get("/smart_chatbot", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/chatbot.html"));
});

app.listen(3011, () => {
  console.log("Server is running on http://localhost:3011");
});
