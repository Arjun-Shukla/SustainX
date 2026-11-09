const express = require('express');
const User = require('../Models/user.model');
const authCheck = require('../Middlewares/authcheck.middleware');

const router = express.Router();

router.get('/users', authCheck, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('firstName name email');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found.',
            });
        }

        return res.status(200).json({
            success: true,
            user: {
                id: user._id,
                firstName: user.firstName || user.name?.trim().split(/\s+/)[0] || '',
                email: user.email,
            },
        });
    } catch (err) {
        console.error('Failed to load logged-in user:', err);
        return res.status(500).json({
            success: false,
            message: 'Unable to load user profile.',
        });
    }
});

module.exports = router;
