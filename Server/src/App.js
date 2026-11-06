const express = require('express');

const app = express();

console.log("Hellooooo");

app.get('/' , (req,res) => {
    res.send("Healthy");
})

module.exports = app;