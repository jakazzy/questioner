const { check } = require("express-validator/check");

module.exports = {

    // Meetup
    validateMeetup: [
        check('userID')
        .not().isEmpty()
        .withMessage('userID is required'),

        check('location')
        .not().isEmpty()
        .withMessage('meetup location is required'),

        check('topic')
        .not().isEmpty()
        .withMessage('topic is required'),

        check('startTime')
        .not().isEmpty()
        .withMessage('start time is required'),

        check('endTime')
        .not().isEmpty()
        .withMessage('end time is required'),

        check('description')
        .not().isEmpty()
        .withMessage('Give a brief description of meetup')
        .isLength({ min: 50 })
    ],

    // RSVP
    validateRsvp: [
        check('userID')
        .not().isEmpty()
        .withMessage('userID is required')
    ],

    // Question
    validateQuestion: [
        check('userID')
        .not().isEmpty()
        .withMessage('userID is required'),

        check('title')
        .not().isEmpty()
        .withMessage('title is required'),

        check('body')
        .not().isEmpty()
        .withMessage('body is required')
    ]

}