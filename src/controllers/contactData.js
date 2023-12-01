const Contact = require('../models/contactModel');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


exports.postContact = async (req, res) => {

    const { title, email, invoiceId, message } = req.body;
    const newContact = new Contact({
        title,
        email,
        message,
    });

    try {
        await newContact.save();
        res.status(200).json({ message: 'Contact saved successfully' });
    } catch (err) {
        console.error('Error saving contact:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};