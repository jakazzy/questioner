// imports
let meetups = require("./../../../dataStore/meetupsTable");
let rsvps = require("./../../../dataStore/rsvpsTable(meetups-tables)");
const { validationResult } = require('express-validator/check');


module.exports = {
    index: function(req, res) {
        res.json({
            status: 200,
            data: meetups
        });
    },

    create: function(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({
                status: 400,
                errors: errors.array()
            });
            return
        }

        meetup = req.body;
        meetup.id = meetups.length + 1;
        meetups.push(meetup);
        res.status(201).json({
            status: 201,
            data: meetup
        })

    },

    show: function(req, res) {
        let meetup = meetups[req.params.meetupID - 1]
        if (meetup == undefined) {
            res.status(404).json({
                status: 404,
                error: `Meetup with id ${req.params.meetupID} not found`
            })
            return
        }

        res.status(200).json({
            status: 200,
            data: meetup
        })
    },

    rsvps: function(req, res) {
        if (meetups[req.params.meetupID - 1] == undefined) {
            res.status(404).json({
                status: 404,
                error: `Meetup with id ${req.params.meetupID} not found`
            });
            return
        }

        attendees = rsvps.filter(function(rsvp) {
            return rsvp.meetupID == req.params.meetupID
        });
        res.json({
            status: 200,
            data: attendees
        })
    },

}