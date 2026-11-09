const express = require("express");
const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({

    plan : String,
    teams : Array,
    contributionHours : String

});

const plan = mongoose.model("plan" , subSchema);

module.exports = plan;