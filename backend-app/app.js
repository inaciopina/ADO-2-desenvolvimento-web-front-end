const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cursoRoutes = require('./routes/cursoRoutes');
const turmaRoutes = require('./routes/turmaRoutes');
const alunoRoutes = require('./routes/alunoRoutes');
const turmaAlunoRoutes = require('./routes/turmaAlunoRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/cursos', cursoRoutes);
app.use('/turmas', turmaRoutes);
app.use('/alunos', alunoRoutes);
app.use('/turma-aluno', turmaAlunoRoutes);

module.exports = app;