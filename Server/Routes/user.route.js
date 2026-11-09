const express = require('express');
const User = require('../Models/user.model');
const Subscription = require('../Models/subscription.model');
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

        const subscription = await Subscription.findOne({
            userId: req.userId,
        })
            .sort({ teamsSelected: -1, _id: -1 })
            .select('plan teamsSelected');

        res.set('Cache-Control', 'no-store');
        return res.status(200).json({
            success: true,
            user: {
                id: user._id,
                firstName: user.firstName || user.name?.trim().split(/\s+/)[0] || '',
                email: user.email,
                plan: subscription?.plan || null,
                teamsSelected: subscription?.teamsSelected || false,
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
