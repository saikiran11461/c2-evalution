const mongoose = require("mongoose");
const branchSchema = mongoose.Schema(
  {
    first_name: { type: String, require: true },
    address: { type: String, require: true },
    IFSC: { type: String, require: true },
    MICR: { type: Number, require: true },
  },
  {
    versionkey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("branchDetails", branchSchema);
