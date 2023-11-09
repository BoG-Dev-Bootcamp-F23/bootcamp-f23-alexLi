import connectDB from '../index';
import Ticket from '../models/Ticket';

async function createTicket(data) {
  await connectDB(); 
  try {
    const ticket = new Ticket(data);
    await ticket.save();
    return true; 
  } catch (error) {
    console.log(error);
    return false; 
  }
};

export default createTicket;