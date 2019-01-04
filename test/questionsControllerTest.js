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

        // upvotes
        it("should return upvotes of a question", function(done) {
            let questionID = 1;
            let questionUpvotes = questions[questionID - 1].upvotes;
            chai.request(server)
                .patch(`/api/v1/questions/${questionID}/upvote`)
                .end(function(err, res) {
                    res.status.should.be.eql(200);
                    expect(res.body.data.upvotes - questionUpvotes).to.eql(1);
                })
            done();
        });

        it("should return error if question does not exist", function(done) {
            chai.request(server)
                .patch("/api/v1/questions/90/upvote")
                .end(function(err, res) {
                    res.should.have.status(404);
                    res.body.error.should.be.eql("Question does not exist");
                });
            done();

        });

        // downvotes
        it("should return upvotes of a question", function(done) {
            let questionID = 1;
            let questionDownvotes = questions[questionID - 1].downvotes;
            chai.request(server)
                .patch(`/api/v1/questions/${questionID}/downvote`)
                .end(function(err, res) {
                    res.status.should.be.eql(200);
                    expect(res.body.data.downvotes - questionDownvotes).to.eql(1);
                })
            done();
        });

        it("should return error if question does not exist", function(done) {
            chai.request(server)
                .patch("/api/v1/questions/90/downvote")
                .end(function(err, res) {
                    res.should.have.status(404);
                    res.body.error.should.be.eql("Question does not exist");
                });
            done();

        });
    })

})