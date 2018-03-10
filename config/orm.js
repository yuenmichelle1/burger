var connection = require("./connection");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, function(err, result){
            if (err) {
                throw err
            } else {
                // do something with the result (function with result)
                cb(result);
            }
        });
    },
    insertOne: function(table, val, cb) {
        // val is an object that the user wants to inset
        var queryString = `INSERT INTO ${table} SET ? ${val}`;
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            } else {
                cb(result);
            }
        });

    },
    updateOne: function() {

    }
}
module.exports = orm;