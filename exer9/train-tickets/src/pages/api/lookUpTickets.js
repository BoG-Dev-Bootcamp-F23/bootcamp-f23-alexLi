import '../../../server/mongodb/actions/readTicketsByUser'
import readTicketsByUser from '../../../server/mongodb/actions/readTicketsByUser'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const tickets = await readTicketsByUser(req.query);
            res.status(200).send('Success');
        } catch (e) {
            res.status(500).send('Failed');
        }
    }
}