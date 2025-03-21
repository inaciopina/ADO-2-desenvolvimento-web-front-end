const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 5520, 
  user: 'root',
  password: 'root', 
  database: 'escola'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

module.exports = connection;