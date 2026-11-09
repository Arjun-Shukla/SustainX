const express = require('express');

const router = express.Router();

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({
        success: true,
        message: 'Logout successful',
    });
});

module.exports = router;