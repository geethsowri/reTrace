const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.put(".change-password", authMiddleware, authController.changePassword);

module.exports = router;

// post methods are used for signup, login, and logout, because they are actions that change the state of the server (creating a user, starting a session, ending a session).
// put method is used for change-password, because it updates an existing resource (the user's password).
// The authMiddleware is used to protect the change-password route, ensuring that only authenticated users can change their password.