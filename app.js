require('dotenv').config()
const express = require('express')
const app = express()
const movieRouter = require('./routes/movieRoute')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT;
const path = require('path');


mongoose.connect(process.env.DB_URL);
const db = mongoose.connection
db.on('error', (errorMessage)=>{console.log(errorMessage)})
db.once('open', ()=>{console.log('Connected successfully to the database!');})

const loginRouter = require('./routes/loginRoute')
const signupRouter = require('./routes/signupRoute')

app.use(express.json())
app.use(cors({origin:'https://movie-ticket-frontend-sandy.vercel.app/'}))

app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/login',loginRouter)
app.use('/api/v1/signup',signupRouter)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(PORT, ()=>{
    console.log(`Server Running on http://localhost:${PORT}/api/v1/movie/`);
})