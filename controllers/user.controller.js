const db = require("../models");
const User = db.user;

// CREATE
exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
exports.findAll = async (req, res) => {
    console.log("✅ GET /api/users endpoint hit");
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

// UPDATE
exports.update = async (req, res) => {
  const id = req.params.id;
  await User.update(req.body, { where: { id } });
  res.json({ message: "Updated successfully" });
};

// DELETE
exports.delete = async (req, res) => {
  const id = req.params.id;
  await User.destroy({ where: { id } });
  res.json({ message: "Deleted successfully" });
};
