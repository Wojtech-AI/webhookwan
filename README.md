# WhatsApp Number Registration Webhook

A minimal Node.js server designed to verify a webhook with Meta/Facebook Developers Platform for WhatsApp Business number registration.

## Purpose

This server provides a webhook endpoint required for WhatsApp Cloud API number registration. It is intentionally minimal and designed to facilitate the validation step during number registration in the Meta Developer Console.

## Features

- Handles GET requests for webhook verification (responding to hub.challenge)
- Processes POST requests to the webhook endpoint (returning 200 OK)
- Minimal implementation with no database or authentication
- Suitable for temporary deployment during WhatsApp number registration

## Setup Instructions

### Local Development

1. Clone this repository:
   ```
   git clone https://github.com/Wojtech-AI/webhookwan.git
   cd webhookwan
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

4. The server will be available at `http://localhost:3000`
   - Webhook endpoint: `http://localhost:3000/webhook`

### Deployment to Railway

1. Create a Railway account if you don't have one at [railway.app](https://railway.app/)

2. Install the Railway CLI:
   ```
   npm i -g @railway/cli
   ```

3. Login to Railway:
   ```
   railway login
   ```

4. Initialize and deploy your project:
   ```
   railway init
   railway up
   ```

5. Your webhook will be available at `https://<your-app>.up.railway.app/webhook`

## WhatsApp Number Registration

1. Go to the [Meta Developer Portal](https://developers.facebook.com/)

2. Navigate to your WhatsApp app or create a new one

3. In the App Dashboard, go to WhatsApp > Configuration

4. Under Webhook, click "Edit"
  
5. Enter your webhook URL: `https://<your-app>.up.railway.app/webhook`

6. Enter the verify token (`test12345` by default, as hardcoded in the server)

7. Select the subscription fields you need

8. Click "Verify and Save"

## Important Notes

- The verify token (`test12345`) is hardcoded in `server.js`. If you want to change it, update it there.
- This project is meant to be minimal and is primarily for the WhatsApp number registration process.
- After successful number registration, you may want to develop a more robust webhook handler for production use.

## License

ISC 