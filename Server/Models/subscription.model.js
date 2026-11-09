const express = require("express");
const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({

    plan : String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    teams : Array,
    contributionHours : String,
    teamsSelected: {
        type: Boolean,
        default: false,
    },

});

const plan = mongoose.model("plan" , subSchema);

module.exports = plan;