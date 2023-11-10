import '../../../server/mongodb/actions/createTicket'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await createTicket(req.body);
            res.status(200).send('Success');
        } catch (e) {
            res.status(500).send('Failed');
        }
    }
}