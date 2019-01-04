// imports
let meetups = require("./../../../dataStore/meetupsTable");

module.exports = {
    create: function(req, res) {
        meetup = req.body;
        meetup.id = meetups.length + 1;
        meetups.push(meetup);
        res.status(201).json({
            status: 201,
            data: meetup
        })

    },
}