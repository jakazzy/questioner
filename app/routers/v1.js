const v1Controllers = require("../controllers/api/v1");
const validator = require("../helpers/validator");

module.exports = function(express) {
    const v1 = express.Router();

    // meetups routes
    v1.post("/meetups", validator.createMeetup, v1Controllers.meetupsController.create);
    return v1
}