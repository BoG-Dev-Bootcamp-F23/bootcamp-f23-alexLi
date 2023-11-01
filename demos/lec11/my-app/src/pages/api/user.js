import { users } from "./_data";

export default function handler(req, res) {
    console.log(req.method);
    if (req.method === "GET") {
        res.status(200).json({ users });
    } else if (req.method === "POST") {
        console.log(req.body);
        const body = req.body;
        if (!req.body) {
            res.status(400).json({ error: "insufficient info"});
            return;
        }
        const id = Math.floor(Math.random() * 10000) + 1;
        const newUser = [
            ...body,
            id: id.toString(),
        ];
        users.push(newUser);
        res.status(200).json( { status: "success!"} );
    }
}