// imports
const chai = require('chai');

const should = chai.should();
const expect = chai.expect;
const chaiHTTP = require('chai-http');
const faker = require('faker');
const server = require('./../server');
const meetups = require('./../app/dataStore/meetupsTable');


chai.use(chaiHTTP);


describe('MeetupsController', () => {
    // GET ALL MEETUPS
    describe('GET api/v1/meetups/', () => {
        it('should get all the meetups', (done) => {
            chai.request(server)
                .get('/api/v1/meetups')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(2);
                });
            done();
        });
    });

    // POST A MEETUP
    describe('POST api/v1/meetups', () => {
        const meetupsLength = meetups.length;

        it('should create a new meetup with valid parameters', (done) => {
            const validMeetup = {
                createdOn: faker.date.recent(),
                location: faker.address.streetAddress(),
                city: faker.address.city(),
                image: faker.image.image(),
                topic: faker.lorem.sentence(),
                description: faker.lorem.sentences(3),
                startTime: faker.date.recent(),
                endTime: faker.date.future(),
                done: true,
                userID: 1,
            };

            chai.request(server)
                .post('/api/v1/meetups')
                .send(validMeetup)
                .end((err, res) => {
                    res.should.have.status(201);
                });
            done();
        });

        it('should increase the length of meetups by one', (done) => {
            const difference = (meetups.length - meetupsLength);
            expect(difference).to.equal(1);
            done();
        });
    });

    // GET A SPECIFIC MEETUP
    describe('GET /api/v1/meetups/:meetup_id', () => {
        it('should return success if the  meetup exist', (done) => {
            chai.request(server)
                .get('/api/v1/meetups/2')
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });

        it('should return error if meetup does not exist', (done) => {
            chai.request(server)
                .get('/api/v1/meetups/90')
                .end((err, res) => {
                    res.should.have.status(404);
                    // res.body.error.should.have(`Meetup with id 90 not found`);
                    res.body.error.should.be.eql('Meetup with id 90 not found');
                });
            done();
        });
    });

    // GET UPCOMING MEETUPS
    describe('GET /meetups/upcoming/', () => {
        it('should get meetups that are done', (done) => {
            chai.request(server)
                .get('/api/v1/meetups/upcoming/')
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });

    // GET RSVPS FOR A MEETUP
    describe('GET /meetups/meetupID/rsvps', () => {
        it('should get rsvps for a meetup', (done) => {
            chai.request(server)
                .get('/api/v1/meetups/1/rsvps')
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });

    // POST RSVPS
    describe('POST /meetups/meetupID/rsvps', () => {
        it('should create rsvp', (done) => {
            const validRSVP = {
                id: 2,
                userID: 2,
                meetupID: 2,
                invitees: faker.random.number(),
            };
            chai.request(server)
                .post('/api/v1/meetups/1/rsvps')
                .send(validRSVP)
                .end((err, res) => {
                    res.should.have.status(201);
                });
            done();
        });
    });
});