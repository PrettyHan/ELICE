import React, { useState } from 'react';
import axios from 'axios';


function Cafes() {
    const [cafe, setCafe] = useState([]);
    const [id, setId] = useState('');
    const [item, setItem] = useState('')
    const [failed, setFailed] = useState('')
    // 카페 메뉴를 불러오는 함수입니다.
    async function fetchCafe() {
        const response = await axios.get(
            `https://${window.location.hostname}:8190/data`
        );
        setCafe(response.data);
    };
    
    const menuName = cafe.map(
        (menu) => (<li key={menu.id}> {menu.item} </li>)
    );
    
    // 지시사항을 참고하여 카페 메뉴를 등록하는 기능을 완성하세요.
    async function handler(e)  {
    if( id !== cafe.map((menu) => menu.id) ) {
        e.preventDefault()
        const additem = {id, item}
        await axios.post(`https://${window.location.hostname}:8190/data`, additem)
    }
        else 
        console.log('실패')
    
    }
    return (
        <>
            <h4>카페 메뉴</h4>
            <div> {menuName} </div> 
            <button id='load' onClick={fetchCafe}>불러오기</button> <br/><br/>
            <form>
                <input id="save_id" value = {id} onChange = {(e) => setId(e.target.value)} />
                <input id="save_item" value = {item} onChange = {(e) => setItem(e.target.value)} />
                <button onClick = {handler} id='save'>등록하기</button>
            </form>
            <div id = "fail">
                {failed}
            </div>
        </>
    );
}


function App() {
  return (
    <div className="App">
      <Cafes/>
    </div>
  );
}

export default App;
