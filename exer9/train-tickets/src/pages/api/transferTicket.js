import updateTicketByUser from '../../../server/mongodb/actions/updateTicketByUser'

export default async function handler(req, res) {
    if (req.method === 'PATCH') {
        try {
            await updateTicketByUser(req.body);
            res.status(200).send('Success');
        } catch (e) {
            res.status(500).send('Failed');
        }
    }
}