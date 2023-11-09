import connectDB from '../index';
import User from '../models/User';

async function createUser(data) {
  await connectDB(); // connect to db
  try {
    const user = new User(data);
    await user.save(); // save user to db
    return true; // return true for passing
  } catch (error) {
    console.log(error);
    return false; 
  }
};

export default createUser;