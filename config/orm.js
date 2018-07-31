const connection = require('./connection.js');

orm = {
  selectAll: function(tableName, cb){
    let queryString = `SELECT * FROM ${tableName}`;

    connection.query(queryString, function(err, result){
      if (err){
        throw err;
      }
        cb(result);
    });
  },

  insert: function(tableName, colOne, colTwo, valOne, valTwo, cb){
    let queryString = `INSERT INTO ${tableName} (${colOne}, ${colTwo}) VALUES ('${valOne}','${valTwo}')`

    connection.query(queryString, function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(tableName, column, value, cb){
    let queryString = `INSERT INTO ${tableName} (${column}) VALUES ('${value}')`

    connection.query(queryString, function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(tableName, column, id, cb){
    let queryString = `UPDATE ${tableName} SET ${column} = 1 WHERE id=${id}`;

    connection.query(queryString, function(err, result){
      if (err){
        throw err;
      }
        cb(result);
    });
  },

  selectSpecific: function(tableOne, tableTwo, colOne, colTwo, colThree, value, cb ) {

  let queryString = `SELECT * FROM ${tableOne} JOIN ${tableTwo} ON ${tableOne}.${colOne} = ${tableTwo}.${colTwo} WHERE ${tableOne}.${colThree} = ${value}`
    connection.query(queryString, function(err, result){
      if (err){
        throw err;
      }
        cb(result);
    });
  },

}
module.exports = orm;
