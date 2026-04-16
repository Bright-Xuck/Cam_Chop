import express from 'express'
import router from './auth/CustomerAuth.js'

const app = express()
const PORT = 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('sdkjkbjv')
})

app.use('/auth/api', router, (req,res)=>{
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
})