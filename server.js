const mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    port:3306,
    database:"self-learning",
    user: "root",
    password: ""
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });