const express = require("express");
const app = express();
const data = require("./movieData");
const path = require("path");

// GET params, query: 여러가지 데이터 가능
// POST body

// 바디는 JSON 형태로 받을 수 있다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userData = [
  {
    id: "elice",
    pw: "1234",
  },
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/register", (req, res) => {
  const { id, pw } = req.body;
  const newData = {
    id,
    pw,
  };
  userData.push(newData);
  res.send({
    status: "succ",
  });
});

app.post("/login", (req, res) => {
  console.log("클라이언트 값", req.body);
  const { id, pw } = req.body;
  // const id = req.body.id;
  // const pw = req.body.pw;

  const findElement = userData.find((v) => v.id === id);
  if (findElement !== undefined && findElement.pw === pw) {
    // 성공
    res.send({
      status: "succ",
    });
  }
  res.send({
    status: "fail",
  });
});

app.listen(3000, () => {
  console.log("3000 port listen!");
});