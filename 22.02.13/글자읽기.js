// 입력한 문자열의 앞에서부터 글자를 읽기
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2');
const btn = document.getElementById('btn');
const message = document.getElementById('message');

const countStr = (num) => {
    const s = input1.value;

    return new Promise((resolve, reject) => {
        // Promise의 실행 결과를 배열에 담아 resolve나 reject로 전달하세요.
        if (num<s.length) {resolve(s.slice(0,num))}
        
        else{reject(s)}
        
        
    });
}

btn.addEventListener('click', () => {
    countStr(input2.value)
    // 전달받은 인자를 출력 형식에 맞춰서 출력하세요.
    .then(
        (param) => {
            message.innerText = `앞에서 ${input2.value}글자는 ${param}입니다.`
        })
    .catch(
        (param) => {
            message.innerText = `${param}의 길이가 ${input2.value}보다 짧습니다.`
        }
    );
});