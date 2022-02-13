const s1 = document.getElementById('sentence1');
const s2 = document.getElementById('sentence2');
const btn = document.getElementById('btn');
const mes = document.getElementById('message');

function f1() {
    
        let i = 0
    const itv = setInterval(() => {
        
        mes.innerHTML += s1.value[i]
        i += 1
        if(i==s1.value.length) {clearInterval(itv)}
        
            
    }, 500);
}

function f2() {
    
        let i = 0
    const itv = setInterval(() => {
        
        mes.innerHTML += s2.value[i]
        i += 1
        if(i==s2.value.length) {clearInterval(itv)}
        
            
    }, 333);
}
    
    

const clickBtn = () => {
    f1();
    f2();
}

btn.addEventListener('click', clickBtn)
