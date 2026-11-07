const express = require("express");
const mongoose = require("mongoose");
const dns = require('dns');
require('dotenv').config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

async function DBConnect(){

    try{

        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected Succesfully.....");

    }

    catch(err) {

        console.log(`Error Connection - ${err}`);
        
    }
}

module.exports = DBConnect;