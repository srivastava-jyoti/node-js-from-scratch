const express = require("express");
const database = require('./server');

const app = express();

app.get("/", (req, res) => {
    let tableName = "users";

    // Query to create table
    let query = `CREATE TABLE ${tableName} (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255)
    )`;

    database.query(query, (err, rows) => {
      if (err) {
        console.error("Error creating table: ", err);
        return res.status(500).send("Table Creation Failed");
      }

      return res.send(`Successfully Created Table - ${tableName}`);
    });
  });

  app.listen(8080, () => {
    console.log(`Server is up and running on 5000 ...`);
  });
