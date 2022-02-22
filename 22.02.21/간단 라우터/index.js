// 8080번 포트를 이용해 서버를 열고,routes 폴더에 있는 두 라우터를 등록하세요.
const express = require('express')
const app = express()
const midterm = require('./routes/midterm')
const final = require('./routes/final')

app.get('/', (req,res) => {
    res.send('테스트')
})

app.use('/midterm', midterm)
app.use('/final', final)

app.listen(8080)

// midterm.js는 "/midterm" 경로에, final.js는 "/final" 경로에 연결하세요.

