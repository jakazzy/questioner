import v1Controllers from '../controllers/api/v1';
import validator from '../helpers/validator';

export default (express) => {
    const v1 = express.Router();

    // meetups routes
    v1.get('/meetups', v1Controllers.meetupsController.index);
    v1.get('/meetups/upcoming', v1Controllers.meetupsController.upcoming);
    v1.get('/meetups/:meetupID', v1Controllers.meetupsController.show);
    v1.get('/meetups/:meetupID/rsvps', v1Controllers.meetupsController.rsvps);
    v1.post('/meetups', validator.validateMeetup, v1Controllers.meetupsController.create);
    v1.post('/meetups/:meetupID/rsvps', validator.validateRsvp, v1Controllers.meetupsController.createRsvp);

    // question routes
    v1.get('/questions', v1Controllers.questionsController.index);
    v1.get('/questions/:questionID', v1Controllers.questionsController.show);
    v1.post('/questions', validator.validateQuestion, v1Controllers.questionsController.create);
    v1.patch('/questions/:questionID/upvote', v1Controllers.questionsController.upvote);
    v1.patch('/questions/:questionID/downvote', v1Controllers.questionsController.downvote);

    return v1;
};