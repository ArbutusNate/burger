var orm = require("../config/orm.js");

var burger = {
  //Pass in callback to ORM
  all: function(cb) {
    console.log("burger.js running 'all' function")
    orm.selectAll(function(res) {
      cb(res);
    })
  }
  //Pass in BurgerID and callback
  // devour: function(){}
}

module.exports = burger;