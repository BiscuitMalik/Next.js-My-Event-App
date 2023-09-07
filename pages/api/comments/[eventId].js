import { MongoClient } from "mongodb";

async function handler(req, res) {
    const eventId = req.query.eventId;
    const client = await MongoClient.connect('mongodb+srv://haroon-asif:T4Dp4lR4DzOgz2Fv@cluster0.gviiq76.mongodb.net/');

    try {
        if (req.method === 'POST') {
            const { email, name, text } = req.body;
            if (!email.includes('@') || !name || !email || name.trim() === '' || text.trim() === '') {
                res.status(422).json({ message: 'Data you entered is invalid!' });
                return;
            }
            const newComment = {
                name,
                email,
                text,
                eventId,
            };
            const db = client.db();
            const result = await db.collection('comments').insertOne(newComment);
            console.log(result);
            newComment.id = result.insertedId;
            res.status(201).json({ message: 'Comment Added', comment: newComment });
        }

        if (req.method === 'GET') {
            const db = client.db();
            const documents = await db.collection('comments').find({ eventId }).sort({ _id: -1 }).toArray();
            res.status(200).json({ comments: documents });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        client.close();
    }
}

export default handler;
