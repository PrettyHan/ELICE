const express = require("express");
const app = express();
const passport = require("passport");
const Strategy = require("passport-local");
const session = require("express-session");
const mongoose = require("mongoose");
const User = require("./models/user");
const Post = require("./models/posts");
const Comment = require("./models/comment");

/*
    Passport 구현방법
    1. Strategy
    2. serialize
    3. deserialize
*/

mongoose
  .connect("mongodb+srv://admin:1234@cluster0.yfbio.mongodb.net/elice")
  .then(async () => {
    console.log("DB 연결 성공");
    // try catch 내부에서 프로미스가 있다면 await로 기다려주는게 맞다.
    try {
      const test1 = new User({
        username: "elice",
        password: "1234",
      });
      await test1.save(); // 프로미스는 내부에서 콜백함수를 실행 안에서 throw

      const test2 = new User({
        username: "elice2",
        password: "5678",
      });
      await test2.save();
      console.log("데이터 생성 완료");
    } catch (e) {
      console.log("데이터 이미 만듦");
    }
  })
  .catch((e) => {
    console.log("DB 연결 실패");
  });

// POST 요청 시 Body 사용을 위한 기본코드
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// passport 사용을 위한 미들웨어 기본코드
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Strategy(async (username, password, done) => {
    console.log("최초 로그인 상황");
    const findData = await User.findOne({ username });
    if (findData === null) {
      // 못찾은 경우 = 아이디가 없는 경우
      done(null, false);
    } else if (findData.password === password) {
      // 로그인 성공
      done(null, findData);
    } else {
      // 비밀번호 틀림.
      done(null, false);
    }
  })
);

passport.serializeUser((user, done) => {
  console.log("브라우저랑 서버한테 로그인했다는 정보를 심는 단계");
  done(null, user); // 여기서는 브라우져한테 쿠키주고 나한테 세션 데이터 저장
});

passport.deserializeUser((user, done) => {
  console.log("이미 정보 있음 req.user로 전달", user);
  done(null, user); // API req.user 전달.
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.get("/login", (req, res) => {
  res.send(`
        <form action="/login" method="POST">
            <input type="text" name="username" />
            <input type="password" name="password" />
            <input type="submit" value="로그인" />
        </form>
    `);
});

app.get("/logout", (req, res) => {
  req.logout(); // 내부 세션에서 지워줌.
  res.redirect("/");
});

app.post("/post", async (req, res) => {
  if (req.user === undefined) {
    res.send({ status: "로그인이 필요한 서비스입니다." });
  }
  const { title, body } = req.body;
  const { username } = req.user;
  const postData = new Post({
    title: title,
    body: body,
    author: username,
    comment: [],
  });
  try {
    await postData.save();
    res.redirect("/");
  } catch (e) {
    res.send({
      status: "fail",
      error_message: e,
    });
  }
});

app.get("/post", (req, res) => {
  res.send(`
        <form action="/post" method="POST">
        <input type="text" name="title" />
        <textarea name="body"></textarea>
        <input type="submit" value="글 작성" />
        </form>
    `);
});

app.post("/post/:title/comment", (req,res) => {
    if (req.user) {
    const {body} = req.body;

    const newComment = new Comment({
        body,
        author: req.user.username,
    });
    await newComment.save()
    //Post 스키마 commennt 어레이 값 수정
    Post.updateOne({title: req.params.title}, {
        $push: {comment: newComment}
    })
    res.redirect(`/post/${req.params.title}`)
    }
    else {
        res.redirect('/login')
   }
})


app.get("/post/:title", async (req, res) => {
  if (req.user) {
    const postData = await Post.findOne({
      title: req.params.title,
    });
    res.send(`
        <div>
            <h1>제목: ${postData.title}</h1>
            <p>작성자: ${postData.author}</p>
            <p>내용: ${postData.body}</p>


            <form action="/post/${req.params.title}/comment" method = "POST"
                <textarea name="body" placeholder="comment..."></textarea>
                <input type="submit" value="댓글 작성" />
            </form>    

        </div>
    `);
  } else {
    res.redirect("/login");
  }
});

app.get("/", async (req, res) => {
  if (req.user) {
    const allPost = await Post.find({});
    res.send(`
    환영합니다. ${req.user.username}님
    <a href="/logout">로그아웃</a>
    <a href="/post">글 쓰기</a>
    <hr />

        ${allPost
          .map(
            (post) => `<a href="/post/${post.title}">
          <p>${post.title}</p>
          </a>`
          )
          .join("")}

    `);
  } else res.redirect("/login");
});

app.listen(process.env.PORT || 3000, () => console.log("3000번 포트 실행"));