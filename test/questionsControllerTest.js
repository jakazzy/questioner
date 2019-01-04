let chai = require("chai");
let expect = chai.expect;
let should = chai.should();
let chaiHTTP = require("chai-http");
let server = require("./../server");
let faker = require("faker");
let questions = require("./../app/dataStore/questionsTable");

chai.use(chaiHTTP);

describe("QuestionsController", function() {

    describe("/api/v1/questions", function() {
        it("should create a question", function(done) {
            const validQuestion = {
                createdOn: faker.date.recent(),
                userID: 1,
                meetupID: 1,
                title: faker.lorem.sentence(),
                body: faker.lorem.words(),
                upvotes: faker.random.number(),
                downvotes: faker.random.number()
            };

            chai.request(server)
                .post("/api/v1/questions")
                .send(validQuestion)
                .end(function(err, res) {
                    res.status.should.be.eql(201);
                })
            done();
        });


    });
})