import connectDB from '../index'
import Ticket from '../models/Ticket'
import User from '../models/User'

async function updateTicketByUser(data) {
    await connectDB()
    try {
        const { userID, ticketID } = data;
        await Ticket.findByIdAndUpdate(ticketID, { 'userId': userID});
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default updateTicketByUser;