import '../../../server/mongodb/actions/createUser'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await createUser(req.body);
            res.status(200).send('Success');
        } catch (e) {
            res.status(500).send('Failed');
        }
    }
}