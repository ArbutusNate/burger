var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  console.log("burger-controller.js running.");
  burger.all(function(data) {
    console.log("Data to be rendered:" + data);
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.update("/:id", function(req,res) {
//   burger.devour()
// })

module.exports = router;