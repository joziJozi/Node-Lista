const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const introducao = require('./routes/introducao')
const lista1 = require('./routes/Lista1')
const lista2 = require('./routes/Lista2')
const lista3 = require('./routes/Lista3')
const lista4 = require('./routes/Lista4')

app.use('/', introducao)
app.use('/Lista1', lista1)
app.use('/Lista2', lista2)
app.use('/Lista3', lista3)
app.use('/Lista4', lista4)

app.listen(3000, function(){
    console.log('Server UP port 3000')
})

