const express = require('express');

const router = express.Router();

router.get('/logout', (req, res) => {
res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/"
});
    return res.status(200).json({
        success: true,
        message: 'Logout successful',
    });
});

module.exports = router;