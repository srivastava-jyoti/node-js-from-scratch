const express = require("express");
const database = require('./server');
// const userTable = require("./createUsersTable");


const app = express();

app.use(express.json())
app.post("/register", (req, resp)=>{
    resp.send(req.body);
});

app.listen(8080);
