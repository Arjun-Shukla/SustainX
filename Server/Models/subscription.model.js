const express = require("express");
const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({

    plan : String

});

const plan = mongoose.model("plan" , subSchema);

module.exports = plan;