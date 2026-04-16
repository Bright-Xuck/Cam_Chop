import express from 'express'

const router = express.Router()

router.get('/signup', (req, res) => {
    res.send('blhhh')
})

router.post('/signup', (req, res) => {
    res.send('blahhhh')
})

export default router