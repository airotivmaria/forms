const express = require('express');
const User = require('../models/User'); 
const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send('Todos os campos são obrigatórios.');
    }

    const newUser = new User({ name, email, password });
    try {
        await newUser.save();
        res.status(201).send('Usuário cadastrado com sucesso!');
    } catch (err) {
        res.status(400).send('Erro ao cadastrar usuário: ' + err.message);
    }
});

module.exports = router;
