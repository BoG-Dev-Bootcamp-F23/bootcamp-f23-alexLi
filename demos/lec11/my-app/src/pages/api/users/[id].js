import { users } from "../_data";

export default function handler(req, res) {
    if (req.method === "DELETE") {
        // const id = req.query.id;
        const { id } = req.query;
        const idNum = Number(id);
        const newUsers = users.filter(user => {
            return user.id !== idNum;
        });
        while (users.length !== 0) {
            users.pop();
        }
        
        res.status(200).json({ status: "delete successful!"});
    }
}