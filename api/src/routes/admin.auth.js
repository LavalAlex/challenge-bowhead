const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRE_TIME } = process.env;

const { createAdmin, findAll, findAdmin } = require("../utils/authAdmin");

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    var { name, email, password, empresa } = req.body;
    const newAdmin = await createAdmin(name, email, password, empresa);
    if (newAdmin.error) res.status(404).send(newAdmin);
    else res.status(200).send(newAdmin);
  } catch (e) {
    console.log("Error on signup:", e);
    res.status(404).send("Error on the user register");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { password, email } = req.body;
    const adminAuth = await findAdmin(email, password);
    if (!adminAuth || adminAuth.error) return res.status(403).send(adminAuth);
    const token = jwt.sign({ user: adminAuth }, JWT_SECRET, {
      expiresIn: JWT_EXPIRE_TIME,
    });

    res.status(200).send({ user: adminAuth, success: true, token });
  } catch (e) {
    console.log("Error on login:", e);
    res.status(403).send(e);
  }
});

module.exports = router;
