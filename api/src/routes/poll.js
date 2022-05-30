const { Router } = require("express");
const Mood = require("../schemas/Mood");
const Sleep = require("../schemas/Sleep");
const router = Router();

const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;


const {verifyToken} = require('../utils/verifyToken');
const { createPoll } = require("../utils/poll.utils");

router.post("/create", async (req, res) => {
  try {
    const { sleep, mood } = req.body;
    if (!sleep || !mood) {
      res.status(401).send("Error:{'Must provide in a Sleep and Mood'}");
    }

    const newPoll = await createPoll(req.body)
    // let newMood = await Mood.create({
    //   response: mood,
    // });

    // let newSleep = await Sleep.create({
    //   response: sleep,
    // });

    // newMood.save();
    // newSleep.save();

    res.status(200).send({ msg: "Create Successfully" });
  } catch (e) {
    console.log("Error on create the poll", e);
    res.status(404).send("Error on create the poll");
  }
});


router.get('allSleep', verifyToken, async (req, res) => {
  try {
    var decoded = jwt.verify(req.token, JWT_SECRET);   
    if(!decoded.user) res.status(403).send({error: "Token Invalidate"})
    const allAdmin = await Sleep.find();
    if (allAdmin.error) res.status(404).send(allAdmin.error);
    else res.status(200).send(allAdmin);
  } catch (e) {
    console.log("Error on alluser:", e);
    res.status(404).send(e);
  }
})

module.exports = router