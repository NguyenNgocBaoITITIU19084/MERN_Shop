const mongoose = require("mongoose");

const connect_MERN_DB = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then(console.log("Successfully Connected to MongoDB"));
};

module.exports = connect_MERN_DB;
