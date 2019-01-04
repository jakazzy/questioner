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

    // POST
    describe("POST api/v1/meetups", function() {
        let meetupsLength = meetups.length;

        it("should create a new meetup with valid parameters", function(done) {
            const validMeetup = {
                createdOn: faker.date.recent(),
                location: faker.address.streetAddress(),
                city: faker.address.city(),
                image: faker.image.image(),
                topic: faker.lorem.sentence(),
                description: faker.lorem.words(),
                startTime: faker.date.recent(),
                endTime: faker.date.future(),
                done: true,
                userID: 1
            };

            chai.request(server)
                .post("/api/v1/meetups")
                .send(validMeetup)
                .end(function(err, res) {
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
})