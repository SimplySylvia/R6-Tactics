const bcrypt = require('bcryptjs');
const db = require('../models');
const uuidv4 = require('uuid/v4');

const validateBody = body => {
  const errors = [];
  if (!body.email) errors.push('Email required.');
  if (!body.password) errors.push('Password required.');
  return errors;
};

const register = async (req, res) => {
  try {
    // validate body data
    const errors = validateBody(req.body);
    if (errors.length) return res.json({ errors: errors });
    // validate user does not exist
    const foundUser = await db.User.findOne({ email: req.body.email });
    if (foundUser) return res.error();
    // salt and hash user info
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const userData = {
      email: req.body.email,
      password: hash,
      api_key: uuidv4()
    };
    // create user
    const createdUser = await db.User.create(userData);
    res.success(201, createdUser);
  } catch (error) {
    res.error(error.message);
  }
};

const login = async (req, res) => {
  try {
    // validate body data
    const errors = validateBody(req.body);
    if (errors.length) return res.json({ errors: errors });
    // validate user exists
    const foundUser = await db.User.findOne({ email: req.body.email }).select(
      '+password'
    );
    if (!foundUser) return res.error();
    // compare passwords
    const match = await bcrypt.compare(req.body.password, foundUser.password);
    if (!match) return res.error();
    // create session
    req.session.loggedIn = true;
    req.session.currentUser = { id: foundUser._id };
    return res.success(200, foundUser);
  } catch (error) {
    res.error(error.message);
  }
};

module.exports = {
  register,
  login
};
