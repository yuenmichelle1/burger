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
  insertOne: function(table, val, cb) {
    // val is an object that the user wants to insert eg {burger_name: Cheeseburger}
    var queryString = `INSERT INTO ${table} SET ?`;
    console.log(queryString);
    connection.query(queryString, val, function(err, result) {
      if (err) {
        throw err;
      } else {
        cb(result);
      }
    });
  },
  // condition looks like eg. id = 4
  updateOne: function(table, vals, condition, cb) {
    var queryString = `UPDATE ${table} SET ? WHERE ${condition};`;
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
module.exports = orm;
