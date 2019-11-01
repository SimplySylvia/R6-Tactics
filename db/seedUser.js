const db = require('../models');
const bcrypt = require('bcryptjs');
const uuidv4 = require('uuid/v4');

const testUser = {
  email: 'test@test.com',
  password: '1234',
  api_key: uuidv4()
}


const run = async() => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(testUser.password, salt);
  testUser.password = hash;
  const deletedUsers = await db.User.remove({});
  console.log(`Removed`, deletedUsers.deletedCount);
  const createdUser = await db.User.create(testUser);
  console.log(`created`, createdUser);
  process.exit();
}

run();