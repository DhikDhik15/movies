'use strict';
require('dotenv').config();
const axios = require('axios');

const xenditSecretKey = process.env.PRIVATE_KEY;
const xenditBaseUrl = 'https://api.xendit.co';

exports.balance = async (req, res) => {
    try {
        const response = await axios.get(`${xenditBaseUrl}/balance/`, {
            auth: {
                username: xenditSecretKey,
                password: ''
            }
        });
        res.status(200).json({
            status: 200,
            data: response.data
        })
    } catch (error) {
        res.status(500).json({
            error: error,
        })
    }
}