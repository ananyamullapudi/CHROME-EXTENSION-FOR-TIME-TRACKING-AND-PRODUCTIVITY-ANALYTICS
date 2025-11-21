const express = require("express");
const router = express.Router();

const {
  saveTime,
  getToday,
  getWeekly
} = require("../controllers/timeController");

router.post("/save", saveTime);
router.get("/today", getToday);
router.get("/weekly", getWeekly);

module.exports = router;
