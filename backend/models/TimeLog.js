const mongoose = require("mongoose");

const TimeLogSchema = new mongoose.Schema({
  site: String,
  duration: Number, // in milliseconds
  category: String, // productive/unproductive
  date: String // yyyy-mm-dd
});

module.exports = mongoose.model("TimeLog", TimeLogSchema);
