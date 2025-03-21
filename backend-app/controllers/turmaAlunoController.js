const Curso = require('../models/cursoModel');

exports.getAllCursos = (req, res) => {
  Curso.getAll((err, cursos) => {
    if (err) res.status(500).send(err);
    res.status(200).json(cursos);
  });
};

exports.getCursoById = (req, res) => {
  Curso.getById(req.params.id, (err, curso) => {
    if (err) res.status(500).send(err);
    res.status(200).json(curso);
  });
};

exports.createCurso = (req, res) => {
  const newCurso = req.body;
  Curso.create(newCurso, (err, curso) => {
    if (err) res.status(500).send(err);
    res.status(201).json(curso);
  });
};

exports.updateCurso = (req, res) => {
  const id = req.params.id;
  const updatedCurso = req.body;
  Curso.update(id, updatedCurso, (err, curso) => {
    if (err) res.status(500).send(err);
    res.status(200).json(curso);
  });
};

exports.deleteCurso = (req, res) => {
  Curso.delete(req.params.id, (err) => {
    if (err) res.status(500).send(err);
    res.status(204).send();
  });
};