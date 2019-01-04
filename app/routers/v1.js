const v1Controllers = require("../controllers/api/v1");
const validator = require("../helpers/validator");

module.exports = function(express) {
    const v1 = express.Router();

    // meetups routes
    v1.get("/meetups", v1Controllers.meetupsController.index);
    v1.get("/meetups/upcoming", v1Controllers.meetupsController.upcoming);
    v1.get("/meetups/:meetupID", v1Controllers.meetupsController.show);
    v1.get("/meetups/:meetupID/rsvps", v1Controllers.meetupsController.rsvps);
    v1.post("/meetups", validator.createMeetup, v1Controllers.meetupsController.create);
    v1.post("/meetups/:meetupID/rsvps", v1Controllers.meetupsController.createRsvp);

    // question routes
    v1.get("/questions", v1Controllers.questionsController.index);
    v1.get("/questions/:questionID", v1Controllers.questionsController.show);
    v1.post("/questions", v1Controllers.questionsController.create);

    return v1
}