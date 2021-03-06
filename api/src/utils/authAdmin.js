const bcrypt = require("bcrypt");
const saltRounds = 10;

//Schemas
const Admin = require("../schemas/Admin");

const createAdmin = async (name, email, password) => {
  password = bcrypt.hashSync(password, saltRounds);
  const admin = await Admin.findOne({ email });
  if (admin) return { error: "Error, this admin already exists!" };
  let newAdmin = new Admin({
    name,
    email,
    password,
  });
  newAdmin.save();
  return { msg: "Create Successfully" };
};

const findAll = async () => {
  var adminAll = await Admin.find({});
  if (!adminAll) return { error: `Error, no users information` };
  const users = adminAll.map((e) => {
    return { email: e.email, name: e.name, id: e._id };
  });
  return users;
};

const findAdmin = async (email, password) => {
  const adminAuth = await Admin.findOne({ email });
  if (!adminAuth) return { error: "Error, this admin does not exist" };
  const validate = await bcrypt.compare(password, adminAuth.password);
  if (!validate) return { error: "Error, this admin does not exist" };
  return { id: adminAuth._id, email: adminAuth.email, name: adminAuth.name };
};

module.exports = {
  createAdmin,
  findAll,
  findAdmin,
};
