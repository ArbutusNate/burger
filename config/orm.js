// Import MySQL connection.
var connection = require("./connection.js");

// Helper function for SQL syntax.
//   function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//       arr.push("?");
//     }

//     return arr.toString();
//   }

// // Helper function for SQL syntax.
//   function objToSql(ob) {
//     var arr = [];

//     for (var key in ob) {
//       if (Object.hasOwnProperty.call(ob, key)) {
//         arr.push(key + "=" + ob[key]);
//       }
//     }

//     return arr.toString();
//   }

var orm = {
  // Table from which to select and cb function.
  selectAll: function(cb){
    console.log("orm.js running - selectAll function. Querying SQL")
    var queryString = "SELECT * FROM burgers;";
    console.log(queryString);
    connection.query(queryString, function(err,result) {
      if (err) {
        console.log(err);
        return err;
      } else {
      console.log("No error from SQL. Result: ")
      cb(result); //SQL output is passed to callback function from burger.js.
      }
    })
  }
  // Insert a New Burger into burgers
  // insertOne: function(val, cb){
  //   connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [val],
  //     function(err, res) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   })
  // }
  // Update a burger as devoured
  // updateOne: function(burgerId, cb){
  //   connection.query("UPDATE burgers SET ? WHERE ?;",
  //     [{devoured : true}, {id : burgerId}],
  //     function(err,res) {
  //       if (err) {
  //         throw err
  //       }
  //     }
  //     cb(result);
  //   )
  // }
};

module.exports = orm;