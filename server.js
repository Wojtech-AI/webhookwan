const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Webhook verification
app.get('/webhook', (req, res) => {
    const VERIFY_TOKEN = 'test12345'; // <<< IMPORTANT: Match your Facebook token!

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }
});

// Webhook to receive messages
app.post('/webhook', (req, res) => {
    console.log('Webhook POST received:', JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
