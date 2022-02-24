const express = require('express')
// const passport = require('passpoert')
const path = require('path')
const morgan = require('morgan')
const session = require('express-session')
const nunjucks = require('nunjucks')
const dotenv = require('dotenv')

dotenv.config()

const v1 = require('./routes/v1')
const indexRouter = require('./routes/index.js')
// const paspportConfig = require('./passport')
// passportConfig()

const app = express()
app.set('port', 3000)
app.set('view engin', 'html')
nunjucks.configure('views', {
        express: app,
        watch: true
})

app.use(morgan('dev'))
app.use(express.stactic(path.join(___dirname), 'public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'elice sns',
    cookie: {
        httpOnly: true,
        secure: false,
    }
}))

app.use('/', indexRouter)
app.use('/v1', v1)

app.use((req,res,next) =>{ 
    const 
})