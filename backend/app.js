const express = require('express');
const cors = require('cors');

const {
    sequelize
} = require('./models');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        sucesso: true,
        mensagem: 'API funcionando'
    });
});

sequelize.sync()
    .then(() => {
        console.log('Banco conectado.');

        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    })
    .catch((erro) => {
        console.error(erro);
    });
