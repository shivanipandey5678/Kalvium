const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const authorize = require('../middleware/authorize');

// Protected route
router.get("/top-artists", authenticate, authorize("admin"), (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            { _id: "Taylor Swift", totalSongs: 15 },
            { _id: "Drake", totalSongs: 12 }
        ]
    });
});

router.get("/most-active-users", authenticate, authorize("admin"), (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            { _id: "User1", playlists: 5 },
            { _id: "User2", playlists: 3 }
        ]
    });
});

module.exports = router;