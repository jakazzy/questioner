// imports
let meetups = require("./../../../dataStore/meetupsTable");
const { validationResult } = require('express-validator/check');


module.exports = {
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
}