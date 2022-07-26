const express = require("express");
const users = require("../models/users");
const router = express.Router(); //Create router functions

/**Crud Operations
 **Create
 **Update
 **Read
 **Delete
 */

//Get all users
router.get("/", async (req, res) => {
  try {
    const user = await users.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get one user
router.get("/:id", getUser, (req, res) => {
  res.json(res.User);
});

// Create user
router.post("/", async (req, res) => {
  const user = new users({
    name: req.body.name,
    age: req.body.age,
  });
  console.log(user);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Update user
router.put("/:id", getUser, async (req, res) => {
  if (req.body.name != null) {
    res.User.name = req.body.name;
  }
  if (req.body.age != null) {
    res.User.age = req.body.age;
  }
  try {
    const updatedUser = await res.User.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete user
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.User.remove();
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

async function getUser(req, res, next) {
  let User;
  try {
    User = await users.findById(req.params.id);
    if (User == null) {
      return res.status(404).json({ message: "Can't find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.User = User;
  next();
}
