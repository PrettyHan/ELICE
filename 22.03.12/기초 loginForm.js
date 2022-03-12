import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function SimpleLoginForm() {
  // useState 훅을 통해 변수들을 정의함
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')
  const [cofirmPassword, setconfirmPassword] = useState('')
  const [name, setName] = useState('')




  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `이메일: ${email}, 비밀번호: ${password}, 확인 비밀번호: ${confirmPassword}, 이름: ${name} 입니다. `;
    alert(message);
  };

  return (
    <Form onSubmit={     handleSubmit      } className="w-25">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일</Form.Label>
        <Form.Control
          type="email"
          placeholder="abc@example.com"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control
          type="password"
          placeholder="비밀번호"
          value={password}
          oncChange={((e) => setPassword(e.target.value))}




        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>비밀번호 확인</Form.Label>
        <Form.Control
          type="password"
          placeholder="비밀번호 확인"
          value={cofirmPassword}
          onChange={((e) => setconfirmPassword(e.target.value))}
          




        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="엘리스"



        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-4">
        제출
      </Button>
    </Form>
  );
}

export default SimpleLoginForm;