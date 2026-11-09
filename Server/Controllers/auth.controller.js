const jwt = require('jsonwebtoken');
const User = require('../Models/user.model');
require('dotenv').config();

const login = async (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const normalizedEmail = email.trim().toLowerCase();
        const user = await User.findOne({ email: normalizedEmail });

        if (!user) {
            return res.status(401).json({ message: 'Email not found, create a new account' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Password is incorrect' });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || 'sustainx-secret',
            { expiresIn: '1h' }
        );

        res.cookie('token', token, { httpOnly: true });

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: user._id,
                firstName: user.firstName || user.name?.trim().split(/\s+/)[0] || '',
                email: user.email,
            },
        });
        
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ message: 'Error occurred while logging in' });
    }

    return user;
};

module.exports = login;