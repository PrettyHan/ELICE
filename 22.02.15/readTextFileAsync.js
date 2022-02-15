// 비동기로 읽기

const fs = require('fs')

console.log('시작.......')
// 에러나 났을떄 err (콜백함수), 성공했을 떄 data 콜백함수 인자 두개 준거임
fs.readFile('./news.txt', (err, data) => {
    if(err) {
        throw err;

    }
    console.log('1번읽어오기', data.toString())
})

fs.readFile('./news.txt', (err, data) => {
    if(err) {
        throw err;

    }
    console.log('2번읽어오기', data.toString())
})

fs.readFile('./news.txt', (err, data) => {
    if(err) {
        throw err;

    }
    console.log('3번읽어오기', data.toString())
})