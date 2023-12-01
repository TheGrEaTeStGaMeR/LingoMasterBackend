const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://priyanshu:20112003@lingomasters.k7hrkkb.mongodb.net/Accounts";

const db = {};

db.mongoose = mongoose;

db.connect = () => {
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err);
    });
};

module.exports = db;