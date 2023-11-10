import connectDB from '../index'
import Ticket from '../models/Ticket'

async function deleteTicket(data) {
    await connectDB()
    try {
        const { ticketID } = data;
        const exists = await Ticket.exists({ _id: ticketID });
        if (!exists) {
            return false; // Ticket not found
        } else {
            const result = await Ticket.findByIdAndDelete(ticketID);
            return true; // Ticket found
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default deleteTicket;