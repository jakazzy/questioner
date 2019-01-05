// imports
const express = require("express");
const bodyParser = require("body-parser");
const v1 = require("./app/routers/v1");

// Doumentation for the routes
let allRoutes = {
    "meetups_url": "http://api/v1/meetups",
    "create_meetups_url": "http://api/v1/meetups",
    "upcoming_meetups_url": "http://api/v1/meetups/upcoming",
    "meetup_url": "http://api/v1/meetup/{meetupID}",
    "meetup_rsvps": "http://api/v1/meetups/{meetupID}/rsvps",
    "create_meetup_rsvp": "http://api/v1/meetups/{meetupID}/rsvps",
    "questions_url": "http://api/v1/questions",
    "question_url": "http://api/v1/questions/{questionID}",
    "create_question_url": "http://api/v1/questions",
    "upvote_url": "http://api/v1/questions/{questionID}/upvote",
    "downvote_url": "http://api/v1/questions/{questionID}/downvote",
};


// PORT
const port = process.env.PORT || 8080;

// app instantiation
const app = express();

app.get("/", function(req, res) {
    res.send(allRoutes);
});

//root route for the documentation of the endpoints


// routing and middlewares
app.use(bodyParser.json());
app.use("/api/v1", v1(express));

// server starts
app.listen(port, function() {
    console.log("Api Server running at port 8080")
})

// export for test (chai-http)
module.exports = app;