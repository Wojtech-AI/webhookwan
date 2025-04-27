const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Homepage route - just a simple indicator that the server is running
app.get('/', (req, res) => {
  res.send('WhatsApp Number Registration Webhook Server is running');
});

// Webhook verification endpoint (for Facebook/Meta platform)
app.get('/webhook', (req, res) => {
    const VERIFY_TOKEN = 'test12345'; // IMPORTANT: Set this to match your token in Facebook Developer Portal
    
    // Parse parameters from the verification request
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    // Check if a token and mode were sent
    if (mode && token) {
        // Check the mode and token
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            // Respond with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            // Respond with '403 Forbidden' if verify tokens do not match
            console.log('VERIFICATION_FAILED: Token mismatch');
            res.sendStatus(403);
        }
    } else {
        // Missing parameters
        console.log('VERIFICATION_FAILED: Missing parameters');
        res.sendStatus(400);
    }
});

// Webhook endpoint for receiving messages/events (not required for number registration but good to have)
app.post('/webhook', (req, res) => {
    console.log('Webhook POST received:', JSON.stringify(req.body, null, 2));
    
    // Simply acknowledge the webhook
    res.sendStatus(200);
});

// Start the server
app.listen(PORT, () => {
    console.log(`WhatsApp webhook server running on port ${PORT}`);
    console.log(`Webhook available at: http://localhost:${PORT}/webhook`);
});
