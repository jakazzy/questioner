const v1Controllers = require("../controllers/api/v1");
const validator = require("../helpers/validator");

module.exports = function(express) {
    const v1 = express.Router();

    // meetups routes
    v1.post("/meetups", validator.createMeetup, v1Controllers.meetupsController.create);
    v1.get("/meetups/:meetupID", v1Controllers.meetupsController.show);
    v1.get("/meetups", v1Controllers.meetupsController.index);
    v1.get("/meetups/:meetupID/rsvps", v1Controllers.meetupsController.rsvps);


    return v1
}