// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

const dbConfig = {
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados',
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seu_email@gmail.com',
    pass: 'sua_senha_do_email',
  },
});

let pool;

async function initDatabase() {
  pool = await mysql.createPool(dbConfig);
  console.log('Conectado ao banco de dados MySQL');
}


app.post('/api/submitForm', async (req, res) => {
  const formData = req.body;

  try {
    const connection = await pool.getConnection();
    await connection.query('INSERT INTO form_data SET ?', formData);
    connection.release();

    await transporter.sendMail({
      from: 'seu_email@gmail.com',
      to: 'destinatario@gmail.com',
      subject: 'Novo Formulário Recebido',
      text: `Novo formulário recebido com os seguintes dados: ${JSON.stringify(formData)}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erro ao processar o formulário' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  initDatabase();
});
