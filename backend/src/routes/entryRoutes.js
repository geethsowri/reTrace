const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const entryController = require("../controllers/entryController");

router.use(authMiddleware);

router.post("/", entryController.createEntry);
router.get("/", entryController.getEntires);
router.get("/search", entryController.searchEntries);
router.get("/:id", entryController.getEntry);
router.patch("/:id", entryController.updateEntry);
router.delete("/:id", entryController.deleteEntry);

module.exports = router

