const express = require('express');
const User = require('../Models/user.model');

const router = express.Router();

const signup = router.post('/signup', async (req, res) => {
    try {
        const formData = req.body;

        const user = await User.create(formData);

        return res.status(201).json({
            message: 'User created successfully',
            user,
        });
    } catch (error) {
        console.error('Signup error:', error);

        return res.status(400).json({
            message: 'Signup failed',
            error: error.message,
        });
    }
});

module.exports = signup;

