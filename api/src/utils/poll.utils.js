const Mood = require("../schemas/Mood");
const Sleep = require("../schemas/Sleep");

const dicMood = {
  perfect: { perfect: 1 },
  meh: { meh: 1 },
  bad: { bad: 1 },
};

const dicSleep = {
  yes: { yes: 1 },
  no: { no: 1 },
};

const createPoll = async ({ sleep, mood }) => {
  const findMood = await Mood.findOne({});
  if (!findMood) {
    mood = dicMood[mood];
    const newMood = await Mood.create(mood);
    newMood.save();
  } else {
    if (mood === "perfect") {
      let acum = findMood[mood] + 1;
      const updateMood = await Mood.findByIdAndUpdate(
        findMood._id,
        { perfect: acum },
        { new: true }
      );
    }
    if (mood === "meh") {
      let acum = findMood[mood] + 1;
      const updateMood = await Mood.findByIdAndUpdate(
        findMood._id,
        { meh: acum },
        { new: true }
      );
    }
    if (mood === "bad") {
      let acum = findMood[mood] + 1;
      const updateMood = await Mood.findByIdAndUpdate(
        findMood._id,
        { bad: acum },
        { new: true }
      );
    }
  }

  const findSleep = await Sleep.findOne({});
  if (!findSleep) {
    sleep = dicSleep[sleep];
    const newSleep = await Sleep.create(sleep);
    newSleep.save();
  } else {
    if (sleep === "yes") {
      let acum = findSleep[sleep] + 1;
      const updateSleep = await Sleep.findByIdAndUpdate(
        findSleep._id,
        { yes: acum },
        { new: true }
      );
      return updateSleep;
    }
    if (sleep === "no") {
      let acum = findSleep[sleep] + 1;
      const updateSleep = await Sleep.findByIdAndUpdate(
        findSleep._id,
        { no: acum },
        { new: true }
      );
      return updateSleep;
    }
  }

  return {};
};

module.exports = { createPoll };
