import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import playerRoutes from './routes/playersRoutes.js'
import coachRoutes from './routes/coachRoutes.js'
import connectDB from './dbConfig/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import corsOptions from './config/corsOptions.js'

connectDB()

const app = express()
const port = process.env.PORT || 3500

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/players', playerRoutes)
app.use('/api/coaches', coachRoutes)

app.get('/', (req, res) => {
  res.send('SERVER READY TO ROLL')
})

app.listen(port, () => console.log(`Connected on port ${port}`))
