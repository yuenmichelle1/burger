var burger = require("../models/burger");
var express = require("express");

var router= express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result){
        res.json({id: resultId})
    } )
})


module.exports = router;