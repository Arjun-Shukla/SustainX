const express = require('express');
const DBConnect = require('../Config/db');

const app = express();

DBConnect();

app.get('/' , (req,res) => {
    res.send("Healthy");
})

module.exports = app;