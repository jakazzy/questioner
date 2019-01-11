'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _v = require('./app/routers/v1');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Doumentation for the routes
var allRoutes = {
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
    downvote_url: 'https://myquest.herokuapp.com/api/v1/questions/{questionID}/downvote'
};

// PORT
var port = process.env.PORT || 8080;

// app instantiation
var app = (0, _express2.default)();

app.get('/', function (req, res) {
    res.send(allRoutes);
});

// root route for the documentation of the endpoints


// routing and middlewares
app.use(_bodyParser2.default.json());
app.use('/api/v1', (0, _v2.default)(_express2.default));

// server starts


if (!module.parent) {
    app.listen(port, function () {
        console.log('Api Server running at port 8080');
    });
}

// export for test (chai-http)
exports.default = app;
//# sourceMappingURL=server.js.map