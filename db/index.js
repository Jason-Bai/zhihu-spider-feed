const mysql = require('mysql2/promise');
const config = require('../config');

function query(sql) {
  if (!sql || !sql.length) {
    return Promise.reject(Error('no sql!'));
  }

  return mysql.createConnection(config.db).then((conn) => conn.query(sql));
}

exports.query = query;

function insert(table, row) {
  if (!table || !table.length) {
    return Promise.reject(Error('no table!'));
  }

  if (!row) {
    return Promise.reject(Error('no row!'));
  }

  return mysql.createConnection(config.db)
    .then((conn) => conn.query(`INSERT INTO ${table} SET ?`, row));
}

exports.insert = insert;


function update(table, cols, row) {
  if (!table || !table.length) {
    return Promise.reject(Error('no table!'));
  }

  if (!cols) {
    return Promise.reject(Error('no cols!'));
  }

  if (!row) {
    return Promise.reject(Error('no row!'));
  }

  const updatedCols = cols.map((col) => `${col} = ?`);

  return mysql.createConnection(config.db)
    .then((conn) => conn.query(`UPDATE ${table} SET ${updatedCols} WHERE ID = ?`, row));
}

exports.update = update;

function remove(table, id) {
  if (!table || !table.length) {
    return Promise.reject(Error('no table!'));
  }

  if (!id) {
    return Promise.reject(Error('no id!'));
  }

  return mysql.createConnection(config.db)
    .then((conn) => conn.query(`DELETE FROM ${table} WHERE ID = ?`, [id]));
}

exports.delete = remove;
