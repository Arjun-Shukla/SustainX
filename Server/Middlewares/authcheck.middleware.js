const jwt = require('jsonwebtoken');
require('dotenv').config();

const authCheck = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Authentication required.' });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET || 'sustainx-secret');
        req.userId = payload.id;
        return next();
    } catch (err) {
        return res.status(401).json({ success: false, message: 'Invalid or expired session.' });
    }
};

module.exports = authCheck;