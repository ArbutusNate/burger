var orm = require("../config/orm.js");

var burger = {
  //Pass in callback to ORM
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    })
  }
  //Pass in BurgerID and callback
  devour: function(){}
}