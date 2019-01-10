// imports
import express from 'express';
import bodyParser from 'body-parser';
import v1 from './app/routers/v1';

// Doumentation for the routes
const allRoutes = {
    meetups_url: 'https://myquest.herokuapp.com/api/v1/meetups',
    create_meetups_url: 'https://myquest.herokuapp.com/api/v1/meetups',
    upcoming_meetups_url: 'https://myquest.herokuapp.com/api/v1/meetups/upcoming',
    meetup_url: 'https://myquest.herokuapp.com/api/v1/meetup/{meetupID}',
    meetup_rsvps: 'https://myquest.herokuapp.com/api/v1/meetups/{meetupID}/rsvps',
    create_meetup_rsvp: 'https://myquest.herokuapp.com/api/v1/meetups/{meetupID}/rsvps',
    questions_url: 'https://myquest.herokuapp.com/api/v1/questions',
    question_url: 'https://myquest.herokuapp.com/api/v1/questions/{questionID}',
    create_question_url: 'https://myquest.herokuapp.com/api/v1/questions',
    upvote_url: 'https://myquest.herokuapp.com/api/v1/questions/{questionID}/upvote',
    downvote_url: 'https://myquest.herokuapp.com/api/v1/questions/{questionID}/downvote',
};


// PORT
const port = process.env.PORT || 8080;

// app instantiation
const app = express();

app.get('/', (req, res) => {
    res.send(allRoutes);
});

// root route for the documentation of the endpoints


// routing and middlewares
app.use(bodyParser.json());
app.use('/api/v1', v1(express));

// server starts

if (!module.parent) {
    app.listen(port, () => {
        console.log('Api Server running at port 8080');
    });
}

// export for test (chai-http)
export default app;