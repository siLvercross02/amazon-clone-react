const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I7ZtwJfIWiE56ZraREu1D0FeObnBDVPhuTmBTtGkVTH40MNJuvyRgGVauqXfzAMXjbLyl2jnHr4MPyNJmnp0K2M00qqBjWAVk');

// API

// - App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Test Routes'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received.. ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, 
        currency: 'usd',
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// Endpoint
// http://localhost:5001/clone-a6e07/us-central1/api

