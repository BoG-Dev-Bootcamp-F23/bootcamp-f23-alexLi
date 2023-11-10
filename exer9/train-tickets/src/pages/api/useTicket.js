import deleteTicket from '../../../server/mongodb/actions/deleteTicket'

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            const exists = await deleteTicket(req.query);
            if (!exists) {
                res.status(400).send('Ticket not found')
            } else {
                res.status(200).send('Success');
            }
        } catch (e) {
            res.status(500).send('Failed');
        }
    }
}