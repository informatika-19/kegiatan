const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3000

mongoose.connect('mongodb://localhost:27017/latihan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Database connected')
}).catch((e) => {
    console.log(e)
    console.log('Failed to connect Database!')
})

app.use(cors());
app.options("*", cors());

app.use(express.json({
    extended: true,
    limit: '20mb'
}))
app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}))

app.get('/', (req, res) => {
    res.send('hello word')
})

app.get('/profile/:username/:id', (req, res) => {
    console.log(req.params)
    res.send('username =' + req.params.username)
})
//reg parms
app.get('/daerah/:daerah', (req, res) => {
    console.log(req.params)
})


app.use('/user/', require('./routes/User'))
app.use('/kegiatan/', require('./routes/kegiatan'))

app.listen(port, () => {
    console.log('server started at port ' + port)
})