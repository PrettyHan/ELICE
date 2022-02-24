const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { verifyToken } = require('./middleware.js')

router.get('/token', async (req,res) => {
    try {
        const token = jwt.sign({
            id : '사용자1',
            nick : '사용자nick',
            grade: 'gold',

        }, process.env.jwt_SECRET, {
            expiresIn: '10m',
            issuer:'mySNS'
        })

    }
})

router.get('/test')