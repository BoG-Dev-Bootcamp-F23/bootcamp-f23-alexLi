import connectDB from '../index.js';
import User from '../models/User.js';

async function createUser(data) {
  try {
    await connectDB(); // connect to db
    const user = new User(data);
    await user.save(); // save user to db
    return true; // return true for passing
  } catch (error) {
    console.log(error);
    return false; 
  }
};

export default createUser;