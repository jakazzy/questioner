const { check } = require("express-validator/check");

module.exports = {

    // Meetup
    createMeetup: [
        check('userID').not().isEmpty().withMessage('userID is required')
    ],

    createRsvp: [
        // check('userID').
    ],


    // Question
    createQuestion: []

}