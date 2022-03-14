const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://localhost:27017/c2evalution"
    );
    console.log(`connected at ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectdb;
