const express = require("express");
const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({

    plan : String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    userName: {
        type: String,
        trim: true,
    },
    userEmail: {
        type: String,
        trim: true,
    },
    userMobile: {
        type: String,
        trim: true,
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