import express from 'express'

const app = express()
const PORT = 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('sdkjkbjv')
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
})