var connection = require("./connection");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = `SELECT * FROM ${tableInput}`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      } else {
        // do something with the result (function with result)
        cb(result);
      }
    });
  },
  insertOne: function(table, cols, val, cb) {
    // val is an object that the user wants to insert eg {burger_name: Cheeseburger}
    var queryString = `INSERT INTO ${table} (${cols}) VALUES (${val})`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      } else {
        cb(result);
      }
    });
  },
  // condition looks like eg. id = 4
  updateOne: function(table, val, condition, cb) {
    var queryString = `UPDATE ${table} SET WHERE id=${condition}`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
module.exports = orm;
