import logo from "./logo.svg";
import "./App.css";
import "./Custom.css";

import React, { useState } from "react";

const data = ["apple", "banana", "orange"];

// props는 읽기 전용
function Title({ value, className }) {
  // 여기 영역은 렌더링이 될 때 실행되는 영역
  // 여러가지 계산이 가능함.

  return <h1 className={className}>{value}</h1>; // 실제 렌더링 되는 부분
}

function App() {
  // count = 100
  // count = "Hello World";

  const [text, setText] = useState("");
  const [arr, setArr] = useState(["apple"]);

  // setState 값을 덮어씌우는 방식.
  // props, state << 절대 읽기 값은 바꾸면 안됨.

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }} // setText에 의해서 렌더링이 발생
      />
      <button
        onClick={() => {
          // arr.push("banana"); // arr은 절대 바뀌면 안된다.
          // 불변성

          // 자기 자신한테 연관되는 메소드는 쓰지말자.
          // React: map 새로운 배열을 반환, reduce, filter 다 새로운 배열을 반환
          // [...arr, text] 이것도 역시 새로운 배열을 반환하는거에요.
          // setState 할때는 항상 deep copy

          // Spread 연산자 방식
          setArr([...arr, text]);
          setText("");
        }}
      >
        추가
      </button>

      <div>
        {arr.map((v) => (
          <li>{v}</li>
        ))}
      </div>

      {/** a tag */}
      {/** div tag */}
      {/** h1 tag */}
    </div>
  );
}

export default App;

// 유에서 유를 창조 => map (리액트에선 이걸 제일 많이씀)
// 무에서 유를 창조 => for 문
// 유에서 무를 창조 => forEach