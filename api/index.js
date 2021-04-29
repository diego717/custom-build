import express from 'express'
import { connect } from 'mongoose'
import { json } from 'bodyParser'
import cors from 'cors'

const app = express()
app.use(json())
app.use(cors())

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})

app.get('*', (req, res) => {
    res.send('Chanchiyo Feliz')
    })

export default app