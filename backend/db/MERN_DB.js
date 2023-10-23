const mongoose = require("mongoose");

const connect_MERN_DB = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then(console.log("Successfully Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect a DB"));
};

module.exports = connect_MERN_DB;
