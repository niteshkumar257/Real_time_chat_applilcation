const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONOG_URI;

const connectDb = async () => {
    
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database started");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectDb;
