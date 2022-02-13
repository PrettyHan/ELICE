const btnSuccess = document.getElementById('btn_success');
const btnFail = document.getElementById('btn_fail');
const text = document.getElementById('text');

const prom = (param) => {
    return new Promise((resolve, reject) => {
        if(param){resolve('성공')}
        else{reject('실패')}
    
    
    }

        
    )
}

btnSuccess.addEventListener('click', () => {
    prom(true).then(
        (param) => { text.innerText = `${param}했습니다!` },
        (param) => { text.innerText = `${param}했습니다 ㅜㅜ` }
    )
});

btnFail.addEventListener('click', () => {
    prom(false).then(
        (param) => { text.innerText = `${param}했습니다!` },
        (param) => { text.innerText = `${param}했습니다 ㅜㅜ` }
    )
});