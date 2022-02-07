'use strict'

const Event = require('../model/event-schema');

exports.getEvent = async (req, res, next) => {
    try {
        const event = await Event.find();
        res.send(event)
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};

exports.addEvent = async (req, res, next) => {
    try {
    const { title, date, venue} = req.body;
    const event = await Event.create({ title, date, venue});
    res.status(201);
    res.send(event);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};