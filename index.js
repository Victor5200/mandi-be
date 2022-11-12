const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const router = require('./src/routes/router')


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(router)


// rUkz6oQYuoAkUzok
//177.74.197.140/32
// My IP Address
//mongosh "mongodb+srv://cluster0.ppgk6zq.mongodb.net/myFirstDatabase" --apiVersion 1 --username ApiMongo

mongoose.connect('mongodb+srv://ApiMongo:rUkz6oQYuoAkUzok@cluster0.ppgk6zq.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Conectamos ao monbodb!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))

