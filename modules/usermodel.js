const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    first_name: { type: String, require: true },
    middle_name: { type: String, require: false },
    last_name: { type: String, require: true },
    age: { type: Number, require: true },
    email: { type: String, require: true },
    address: { type: String, require: true },
    gender: { type: String, require: false, default: "female" },
    type: { type: String, require: false, default: "customer" },
  },
  {
    versionkey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
