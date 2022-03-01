import logo from "./logo.svg";
import "./App.css";
import "./Custom.css";

import React, { useState } from "react";

function Page1() {
  return (
    <div>
      <h1>자기소개 페이지입니다.</h1>
      <p>이름 ~~~~</p>
    </div>
  );
}
function Page2() {
  return (
    <div>
      <p>준비중</p>
    </div>
  );
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show</button>
      {show === false ? <Page1 /> : <Page2 />}
    </div>
  );
}

export default App;

// 유에서 유를 창조 => map (리액트에선 이걸 제일 많이씀)
// 무에서 유를 창조 => for 문
// 유에서 무를 창조 => forEach