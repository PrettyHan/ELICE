// 여러 숫자를 입력 받도록 코드를 작성하여, 입력된 숫자의 평균을 구하세요.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
    num = line.split(' ').map((el) => parseInt(el));
  rl.close();
}).on("close", function () {
    let ans = 0;
    let result = 0;
    for(let i = 0 ; i < num.length ; i++ ){
        ans += num[i]  
        result = Math.floor(ans / num.length)
    }
    result = Math.floor(ans / num.length)
    console.log(result)
});