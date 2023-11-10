import connectDB from '../index'
import Ticket from '../models/Ticket'
import User from '../models/User'

async function readTicketsByUser(data) {
    await connectDB()
    try {
        const { userID } = data;
        const exists = await User.exists({ _id: userID });
        if (!exists) {
            return false; // Ticket not found
        } else {
            const result = await Ticket.findByIdAndDelete(ticketID);
            return await Ticket.find({ "userID": userID});
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default readTicketsByUser;