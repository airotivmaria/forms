const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const UserModel = require('../models/User'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log("Conectado ao MongoDB!");
}).catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await UserModel.find(); 
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar usuários" });
    }
});

module.exports = app;