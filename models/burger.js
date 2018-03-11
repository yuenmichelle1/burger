var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(vals, cb){
        // vals is an object that looks like eg. {burger_name: Hamburger}
        orm.insertOne("burgers", vals, function(res){
            cb(res);
        });
    }, 
    updateOne: function(val, condition, cb){
        orm.updateOne("burgers", val, condition, function(res){
            cb(res);
        })
    }
}
module.exports = burger;