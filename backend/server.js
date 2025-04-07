const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
    try {
        await client.connect();
        console.log("Conectado ao MongoDB!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
}

connect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});