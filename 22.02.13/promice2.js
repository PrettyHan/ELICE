// setTimeout을 이용해 3초 카운트하기

const btn = document.getElementById('btn');
const text = document.getElementById('text');

const wait = (timer) => {
    return new Promice((resolve) => setTimeout(resolve, timer))   
    
    }
    
function countR() {
    wait(3000).then(()=>{console.log('1')})
    

}     
    
    


btn.addEventListener('click', countR)
