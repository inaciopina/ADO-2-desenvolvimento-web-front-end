const db = require('../config/db');

const Curso = {
  getAll: (callback) => {
    db.query('SELECT * FROM tb_curso', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM tb_curso WHERE id_curso = ?', [id], callback);
  },
  create: (curso, callback) => {
    db.query('INSERT INTO tb_curso (nm_curso) VALUES (?)', [curso.nm_curso], callback);
  },
  update: (id, curso, callback) => {
    db.query('UPDATE tb_curso SET nm_curso = ? WHERE id_curso = ?', [curso.nm_curso, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM tb_curso WHERE id_curso = ?', [id], callback);
  }
};

module.exports = Curso;