import db from '../db.js';

export const getAll = (callback) => {
  db.all('SELECT * FROM leads ORDER BY createdAt DESC', [], callback);
};

export const create = (nome, email, callback) => {
  db.run('INSERT INTO leads (nome, email) VALUES (?, ?)', [nome, email], callback);
};

export const remove = (id, callback) => {
  db.run('DELETE FROM leads WHERE id = ?', [id], callback);
};
