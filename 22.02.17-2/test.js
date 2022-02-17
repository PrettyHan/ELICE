const mongoose = require("mongoose");
const User = require("./model");
// mongodb+srv://admin:1234@cluster0.yfbio.mongodb.net/elice
// mongodb://localhost:27017/elice

mongoose.connect(
  "mongodb+srv://admin:1234@cluster0.yfbio.mongodb.net/elice",
  (err) => {
    console.log("MongoDB Connect");
    const newUser = new User({
      id: "elice1111",
      pw: "1234",
    });
    newUser
      .save()
      .then((v) => {
        console.log("성공");
      })
      .catch((e) => {
        console.log("실패");
      });

    User.find({ id: "apple" })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("찾기 실패");
      });
  }
);
// 유저가 모이는 유저 데이터
// 뼈대 구축을 먼저 해야함 => 스키마 설정
//  {
//      id: ~~ String, 이거 항상 유일해야 함
//      pw: ~~ String, 이거 항상 유일 필요 x
//  }