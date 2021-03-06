const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'devnotes',
});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao BD ${process.env.PORT}`)
});

module.exports = connection;