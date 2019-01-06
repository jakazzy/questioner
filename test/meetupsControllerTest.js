// imports
let chai = require("chai");
let should = chai.should();
let expect = chai.expect;
let chaiHTTP = require("chai-http");
let server = require("./../server");
let faker = require("faker");
let meetups = require("./../app/dataStore/meetupsTable");


chai.use(chaiHTTP);


describe("MeetupsController", function() {
    // GET ALL MEETUPS
    describe("GET api/v1/meetups/", function() {
        it("should get all the meetups", function(done) {
            chai.request(server)
                .get("/api/v1/meetups")
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.data.should.be.a("array");
                    res.body.data.length.should.be.eql(2);
                })
            done();
        })
    });

    // POST A MEETUP
    describe("POST api/v1/meetups", function() {
        let meetupsLength = meetups.length;

        it("should create a new meetup with valid parameters", function(done) {
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
                userID: 1
            };

            chai.request(server)
                .post("/api/v1/meetups")
                .send(validMeetup)
                .end(function(err, res) {
                    console.log(res.body);
                    res.should.have.status(201);
                });
            done()
        });

        it("should increase the length of meetups by one", function(done) {
            let difference = (meetups.length - meetupsLength);
            expect(difference).to.equal(1);
            done()
        })
    });

    // GET A SPECIFIC MEETUP
    describe("GET /api/v1/meetups/:meetup_id", function() {
        it("should return success if the  meetup exist", function(done) {
            chai.request(server)
                .get("/api/v1/meetups/2")
                .end(function(err, res) {
                    res.should.have.status(200);
                })
            done();
        });

        it("should return error if meetup does not exist", function(done) {
            chai.request(server)
                .get("/api/v1/meetups/90")
                .end(function(err, res) {
                    res.should.have.status(404);
                    // res.body.error.should.have(`Meetup with id 90 not found`);
                    res.body.error.should.be.eql(`Meetup with id 90 not found`);
                })
            done()
        })
    });

    // GET UPCOMING MEETUPS
    describe("GET /meetups/upcoming/", function() {
        it("should get meetups that are done", function(done) {
            chai.request(server)
                .get("/api/v1/meetups/upcoming/")
                .end(function(err, res) {
                    res.should.have.status(200);
                })
            done();
        })
    });

    // GET RSVPS FOR A MEETUP
    describe("GET /meetups/meetupID/rsvps", function() {
        it("should get rsvps for a meetup", function(done) {
            chai.request(server)
                .get("/api/v1/meetups/1/rsvps")
                .end(function(err, res) {
                    res.should.have.status(200);
                })
            done()
        })
    });

    // POST RSVPS
    describe("POST /meetups/meetupID/rsvps", function() {
        it("should create rsvp", function(done) {
            let validRSVP = {
                id: 2,
                userID: 2,
                meetupID: 2,
                invitees: faker.random.number()
            };
            chai.request(server)
                .post("/api/v1/meetups/1/rsvps")
                .send(validRSVP)
                .end(function(err, res) {
                    res.should.have.status(201);
                })
            done();
        })
    })
})