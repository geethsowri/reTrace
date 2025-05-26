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

// The authMiddleware is used to protect all routes, ensuring that only authenticated users can create, read, update, or delete entries.
// the get methods are generally used for reading data (getting entries, searching entries, getting a specific entry).
// a post method is generally used for creating new data (creating an entry).
// a patch method is generally used for updating existing data (updating an entry).
// a delete method is generally used for deleting existing data (deleting an entry).
// The entryController contains the logic for handling these requests, such as interacting with the database and returning responses to the client.