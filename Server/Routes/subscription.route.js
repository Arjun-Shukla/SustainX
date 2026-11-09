const express = require("express");
const plan = require("../Models/subscription.model");

const router = express.Router();

const join = router.post("/join", async (req, res) => {

  const joinData = req.body;

  try {

    const planData = await plan.create(joinData);

    return res.status(201).json({

      success: true,
      message: "Plan Created Successfully",
      planId: planData._id,
      plan: {
        plan: planData.plan,
      },

    });

  } 
  
  catch (err) {

    return res.status(501).json({
      message: "Error",
      error: err,
    });

  }

  return planData;

});

module.exports = join;
