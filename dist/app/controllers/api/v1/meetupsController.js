'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _check = require('express-validator/check');

var _meetupsTable = require('../../../dataStore/meetupsTable');

var _meetupsTable2 = _interopRequireDefault(_meetupsTable);

var _rsvpsTableMeetupsTables = require('../../../dataStore/rsvpsTable(meetups-tables)');

var _rsvpsTableMeetupsTables2 = _interopRequireDefault(_rsvpsTableMeetupsTables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    index: function index(req, res) {
        res.json({
            status: 200,
            data: _meetupsTable2.default
        });
    },

    upcoming: function upcoming(req, res) {
        var upcomingMeetups = _meetupsTable2.default.filter(function (meetup) {
            return meetup.done == false;
        });

        res.json({
            status: 200,
            data: upcomingMeetups
        });
    },

    create: function create(req, res) {
        var errors = (0, _check.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                status: 400,
                errors: errors.array()
            });
            return;
        }

        var meetup = req.body;
        meetup.id = _meetupsTable2.default.length + 1;
        _meetupsTable2.default.push(meetup);
        res.status(201).json({
            status: 201,
            data: meetup
        });
    },

    show: function show(req, res) {
        var meetup = _meetupsTable2.default[req.params.meetupID - 1];
        if (meetup === undefined) {
            res.status(404).json({
                status: 404,
                error: 'Meetup with id ' + req.params.meetupID + ' not found'
            });
            return;
        }

        res.status(200).json({
            status: 200,
            data: meetup
        });
    },

    rsvps: function rsvps(req, res) {
        if (_meetupsTable2.default[req.params.meetupID - 1] === undefined) {
            res.status(404).json({
                status: 404,
                error: 'Meetup with id ' + req.params.meetupID + ' not found'
            });
            return;
        }

        var attendees = _rsvpsTableMeetupsTables2.default.filter(function (rsvp) {
            return rsvp.meetupID == req.params.meetupID;
        });
        res.json({
            status: 200,
            data: attendees
        });
    },

    createRsvp: function createRsvp(req, res) {
        var errors = (0, _check.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                status: 400,
                errors: errors.array()
            });
            return;
        }

        var rsvp = req.body;
        rsvp.id = _rsvpsTableMeetupsTables2.default.length + 1;
        rsvp.meetupID = req.params.meetupID;
        _rsvpsTableMeetupsTables2.default.push(rsvp);
        res.status(201).json({
            status: 201,
            data: rsvp
        });
    }
}; // imports
//# sourceMappingURL=meetupsController.js.map