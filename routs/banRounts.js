const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
  return res.send("all bank thingss go here");
});

module.exports = router;
