const mysql = require('mysql2')

var db_con = mysql.createConnection({
    host: "localhost",
    port:3306,
    database:"self-learning",
    user: "root",
    password: ""
  });

db_con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
module.exports = db_con;