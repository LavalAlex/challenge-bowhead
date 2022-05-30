const { Router } = require("express");

const router = Router();

const Admin = require("./admin.auth");
const AdminPoll = require("./admin.poll")
const Poll = require("./poll")


//Middleware
router.use("/admin", Admin);
router.use("/admin", AdminPoll)
router.use("/poll", Poll)

module.exports = router;
