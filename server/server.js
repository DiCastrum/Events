'use strict'

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const router = require('./router')

const PORT = 3005;

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
    try {
        await mongoose.connect('mongodb://localhost:27017/events');
        app.listen(PORT,() => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error(err);
    };
})();