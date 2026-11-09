const express = require("express");
const plan = require("../Models/subscription.model");
const mongoose = require("mongoose");

const router = express.Router();

const select = router.post("/select", async (req, res) => {
  const { planId, teams, contributionHours } = req.body || {};

  if (!mongoose.isValidObjectId(planId)) {
    return res.status(400).json({
      success: false,
      message: "A valid plan ID is required.",
    });
  }

  try {
    const teamData = await plan.findByIdAndUpdate(
      planId,
      {
        $set: {
          teams,
          contributionHours,
        },
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!teamData) {
      return res.status(404).json({
        success: false,
        message: "The selected plan was not found.",
      });
    }

    return res.status(200).json({

      success: true,
      message: "Team Selection Successfull",

    });


  } catch (err) {
    console.error("Team selection update failed:", err);

    return res.status(500).json({
      success: false,
      message: "Unable to update the selected plan.",


    });

  }

});

module.exports = select;
