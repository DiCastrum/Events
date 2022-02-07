const express = require('express');
const router = express.Router();

const event = require('./controller/events');

router.get('/events', event.getEvent);
router.post('/events', event.addEvent);


module.exports = router;