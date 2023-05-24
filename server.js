const express = require('express')
const app = express()
const port = process.env.PORT || 5000 //5000
const dbConnection = require('./db.js')
app.use(express.json())




app.use('/api/cars/' ,require('./routes/carsRoute.js'))
app.use('/api/users/' ,require('./routes/usersRoute.js'))
app.get('/',(req,res) => res.send('hello world!'))
app.listen(port,() => console.log(`Node JS Server started in port ${port}`))  