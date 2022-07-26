require("dotenv").config();
const mongoose = require("mongoose");
const DB = process.env.DB_CONNECTION;

const connectionDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrLParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (err) {
    console.log("Failed to connect to local server", err);
  }
};

module.exports = connectionDB;
