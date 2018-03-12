var burger = require("../models/burger");
var express = require("express");

var router= express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    })
})

router.post("/api/burgers", function(req, res){
    burger.insertOne(req.body, function(result){
        res.json(result)
    })
})

router.put("/api/burgers/:id", function(req, res){
    var condition= `id= ${req.params.id}`
    burger.updateOne(req.body, condition, function(result){
        res.json(result);
    })
   
})


module.exports = router;