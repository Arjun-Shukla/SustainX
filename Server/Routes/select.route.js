const express = require("express");
const plan = require("../Models/subscription.model");
const User = require("../Models/user.model");
const mongoose = require("mongoose");
const authCheck = require("../Middlewares/authcheck.middleware");

const router = express.Router();

const select = router.post("/select", authCheck, async (req, res) => {
  const { planId, teams, contributionHours } = req.body || {};

  if (!mongoose.isValidObjectId(planId)) {
    return res.status(400).json({
      success: false,
      message: "A valid plan ID is required.",
    });
  }

  try {
    const user = await User.findById(req.userId).select("firstName lastName name email mobile");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "The logged-in user was not found.",
      });
    }

    const userName = user.name?.trim() || [user.firstName, user.lastName].filter(Boolean).join(" ");
    const teamData = await plan.findOneAndUpdate(
      { _id: planId, userId: req.userId },
      {
        $set: {
          teams,
          contributionHours,
          teamsSelected: true,
          userName,
          userEmail: user.email,
          userMobile: user.mobile,
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
        message: "The selected plan was not found for this account.",
      });
    }

    return res.status(200).json({

      success: true,
      message: "Team Selection Successfull",
      plan: teamData.plan,
      teamsSelected: teamData.teamsSelected,
      userName: teamData.userName,
      userEmail: teamData.userEmail,
      userMobile: teamData.userMobile,

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
