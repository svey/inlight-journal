const express = require("express");
const journalRoutes = require("./../controllers/journal-controller.js");

const router = express.Router();

router.get("/all", journalRoutes.all);
router.post("/create", journalRoutes.create);
router.put("/delete", journalRoutes.delete);
router.put("/reset", journalRoutes.reset);

module.exports = router;
