# QuestionerV2
[![Build Status](https://travis-ci.com/jakazzy/questioner.svg?branch=develop)](https://travis-ci.com/jakazzy/questioner)
[![Coverage Status](https://coveralls.io/repos/github/jakazzy/questionerV2/badge.svg?branch=develop)](https://coveralls.io/github/jakazzy/questionerV2?branch=develop)

# Questioner

Questioner is an application that enables a meetup organizer crowd-source questions for a meetup. Questioner helps the meetup organizer prioritize questions to be answered. Other users can vote on asked questions and they bubble to the top
or bottom of the log.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone https://github.com/jakazzy/questioner.git # or clone your own fork
cd questioner
npm install
npm run server
```

Your app should now be running on [localhost:8080](http://localhost:8080/).

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```
