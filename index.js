const express = require('express');

const app = express();

app.get("/", (req, resp)=>{
    resp.send("app is working fine!")
});

app.listen(8080);