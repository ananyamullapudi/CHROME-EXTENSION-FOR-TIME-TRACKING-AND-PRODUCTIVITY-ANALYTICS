const TimeLog = require("../models/TimeLog");
const classify = require("../utils/classifySites");

// Save time log from extension
exports.saveTime = async (req, res) => {
  try {
    const { site, duration } = req.body;

    const date = new Date().toISOString().split("T")[0];
    const category = classify(site);

    await TimeLog.create({ site, duration, category, date });

    res.json({ message: "Time log saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get today's logs
exports.getToday = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const logs = await TimeLog.find({ date: today });

    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Weekly report
exports.getWeekly = async (req, res) => {
  try {
    const logs = await TimeLog.find();

    const weekly = {};

    logs.forEach((log) => {
      if (!weekly[log.date]) weekly[log.date] = 0;
      weekly[log.date] += log.duration;
    });

    res.json(weekly);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
