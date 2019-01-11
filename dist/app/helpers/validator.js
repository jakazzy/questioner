'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _check = require('express-validator/check');

exports.default = {

    // Meetup
    validateMeetup: [(0, _check.check)('userID').not().isEmpty().withMessage('userID is required'), (0, _check.check)('location').not().isEmpty().withMessage('meetup location is required'), (0, _check.check)('topic').not().isEmpty().withMessage('topic is required'), (0, _check.check)('startTime').not().isEmpty().withMessage('start time is required'), (0, _check.check)('endTime').not().isEmpty().withMessage('end time is required'), (0, _check.check)('description').not().isEmpty().withMessage('Give a brief description of meetup').isLength({ min: 50 })],

    // RSVP
    validateRsvp: [(0, _check.check)('userID').not().isEmpty().withMessage('userID is required')],

    // Question
    validateQuestion: [(0, _check.check)('userID').not().isEmpty().withMessage('userID is required'), (0, _check.check)('title').not().isEmpty().withMessage('title is required'), (0, _check.check)('body').not().isEmpty().withMessage('body is required')]

};
//# sourceMappingURL=validator.js.map