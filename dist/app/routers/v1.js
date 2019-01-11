'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _v = require('../controllers/api/v1');

var _v2 = _interopRequireDefault(_v);

var _validator = require('../helpers/validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (express) {
    var v1 = express.Router();

    // meetups routes
    v1.get('/meetups', _v2.default.meetupsController.index);
    v1.get('/meetups/upcoming', _v2.default.meetupsController.upcoming);
    v1.get('/meetups/:meetupID', _v2.default.meetupsController.show);
    v1.get('/meetups/:meetupID/rsvps', _v2.default.meetupsController.rsvps);
    v1.post('/meetups', _validator2.default.validateMeetup, _v2.default.meetupsController.create);
    v1.post('/meetups/:meetupID/rsvps', _validator2.default.validateRsvp, _v2.default.meetupsController.createRsvp);

    // question routes
    v1.get('/questions', _v2.default.questionsController.index);
    v1.get('/questions/:questionID', _v2.default.questionsController.show);
    v1.post('/questions', _validator2.default.validateQuestion, _v2.default.questionsController.create);
    v1.patch('/questions/:questionID/upvote', _v2.default.questionsController.upvote);
    v1.patch('/questions/:questionID/downvote', _v2.default.questionsController.downvote);

    return v1;
};
//# sourceMappingURL=v1.js.map