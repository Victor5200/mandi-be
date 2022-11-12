const express = require('express')
const Person = require("../models/Person");
const router = express.Router()
const bodyParser = require('body-parser')

router.get('/status', (req, res) => {
    res.json({message: 'Oi express!'})
});

router.post("/person", async (req, res) => {
    const person = req.body;
    if (!person) {
        res.status(422).json({error: 'O nome é obrigatório'})
    }

    try {
        await Person.create(person)
        res.status(201).json({message: 'Pessoa inserida com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router