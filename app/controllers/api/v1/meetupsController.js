// imports
import { validationResult } from 'express-validator/check';
import meetups from '../../../dataStore/meetupsTable';
import rsvps from '../../../dataStore/rsvpsTable(meetups-tables)';


export default {
    index(req, res) {
        res.json({
            status: 200,
            data: meetups,
        });
    },

    upcoming(req, res) {
        const upcomingMeetups = meetups.filter(meetup => meetup.done == false);

        res.json({
            status: 200,
            data: upcomingMeetups,
        });
    },

    create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                status: 400,
                errors: errors.array(),
            });
            return;
        }

        let meetup = req.body;
        meetup.id = meetups.length + 1;
        meetups.push(meetup);
        res.status(201).json({
            status: 201,
            data: meetup,
        });
    },

    show(req, res) {
        const meetup = meetups[req.params.meetupID - 1];
        if (meetup == undefined) {
            res.status(404).json({
                status: 404,
                error: `Meetup with id ${req.params.meetupID} not found`,
            });
            return;
        }

        res.status(200).json({
            status: 200,
            data: meetup,
        });
    },

    rsvps(req, res) {
        if (meetups[req.params.meetupID - 1] == undefined) {
            res.status(404).json({
                status: 404,
                error: `Meetup with id ${req.params.meetupID} not found`,
            });
            return;
        }

        let attendees = rsvps.filter(rsvp => rsvp.meetupID == req.params.meetupID);
        res.json({
            status: 200,
            data: attendees,
        });
    },


    createRsvp(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                status: 400,
                errors: errors.array(),
            });
            return;
        }

        let rsvp = req.body;
        rsvp.id = rsvps.length + 1;
        rsvp.meetupID = req.params.meetupID;
        rsvps.push(rsvp);
        res.status(201).json({
            status: 201,
            data: rsvp,
        });
    },
};