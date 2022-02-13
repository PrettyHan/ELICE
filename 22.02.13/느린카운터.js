// 느린 카운터를 만듭니다.
const counter = document.getElementById('counter');
const btn = document.getElementById('btn');
const message = document.getElementById('message')

let click = 0




const slowCounter = () => {
    
    
    const curClick = ++click; 
    const current = parseInt(counter.innerText, 10)
    message.innerHTML += `${curClick}. 현재 값은... ${current}<br>`;
       
    
    window.setTimeout(()=>{
        counter.innerText = current + 1
        message.innerHTML += `${curClick}. 더한 값은... ${counter.innerText}<br>`;
    }, 3000);
    
    
}

btn.addEventListener('click', slowCounter);