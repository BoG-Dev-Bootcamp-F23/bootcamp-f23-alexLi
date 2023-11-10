import readTicketsByUser from '../../../server/mongodb/actions/readTicketsByUser'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const tickets = await readTicketsByUser(req.query);
            if (!tickets) {
                res.status(400).send("User Not Found");
            } else {
                res.status(200).send(tickets);
            }
        } catch (e) {
            res.status(500).send('Failed');
        }
    }
}