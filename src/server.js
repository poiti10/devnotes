require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyparser.urlencoded({extended: false}));
server.use('/api', routes);


server.listen(3000, ()=>{
    console.log('Servidor rodando em: http://localhost:3000');
});