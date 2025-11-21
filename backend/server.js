const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const timeRoutes = require("./routes/timeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/time", timeRoutes);

const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URL;

mongoose
  .connect(MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
