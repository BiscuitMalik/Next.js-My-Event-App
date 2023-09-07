import { MongoClient } from 'mongodb'
async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email
        if (!userEmail || !userEmail.includes('@')) {
            console.log(userEmail)
            res.status(422).json({ message: 'Email enter is invalid!' });
            return;
        }
        const client = await MongoClient.connect('mongodb+srv://haroon-asif:T4Dp4lR4DzOgz2Fv@cluster0.gviiq76.mongodb.net/')
        const db = client.db();
        await db.collection('emails').insertOne({ email: userEmail })
        client.close()
        res.status(201).json({ message: "DATA saved" })
    }
    else
        res.status(405).json({ message: 'Method Not Allowed' });
}
export default handler;