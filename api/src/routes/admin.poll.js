const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRE_TIME } = process.env;

const Mood = require("../schemas/Mood");
const Sleep = require("../schemas/Sleep");

const { verifyToken } = require("../utils/verifyToken");
const router = Router();

router.get("/allPoll", verifyToken, async (req, res) => {
  try {
    var decoded = jwt.verify(req.token, JWT_SECRET);
    if (!decoded.user) res.status(403).send({ error: "Token Invalidate" });
    const mood = await Mood.findOne({});
    const sleep = await Sleep.findOne({});
    res.status(200).send({ mood, sleep });
  } catch (e) {
    console.log("Error on alluser:", e);
    res.status(404).send(e);
  }
});

module.exports = router;
