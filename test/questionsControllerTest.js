const chai = require('chai');

const expect = chai.expect;
const should = chai.should();
const chaiHTTP = require('chai-http');
const faker = require('faker');
const server = require('./../server');
const questions = require('./../app/dataStore/questionsTable');

chai.use(chaiHTTP);

describe('QuestionsController', () => {
    describe('/api/v1/questions', () => {
        it('should return all questions', (done) => {
            chai.request(server)
                .get('/api/v1/questions')
                .end((err, res) => {
                    res.status.should.be.eql(200);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(2);
                });
            done();
        });
    });

    // create
    describe('/api/v1/questions', () => {
        it('should create a question with valid question ', (done) => {
            const validQuestion = {
                createdOn: faker.date.recent(),
                userID: 1,
                meetupID: 1,
                title: faker.lorem.sentence(),
                body: faker.lorem.words(),
                upvotes: faker.random.number(),
                downvotes: faker.random.number(),
            };


            chai.request(server)
                .post('/api/v1/questions')
                .send(validQuestion)
                .end((err, res) => {
                    res.status.should.be.eql(201);
                });
            done();
        });

        it('should trigger validation erros when passed an invalid question ', (done) => {
            const invalidQuestion = {
                createdOn: faker.date.recent(),
                userID: 1,
                meetupID: 1,
                title: faker.lorem.sentence(),
                body: '',
                upvotes: faker.random.number(),
                downvotes: faker.random.number(),
            };


            chai.request(server)
                .post('/api/v1/questions')
                .send(invalidQuestion)
                .end((err, res) => {
                    res.status.should.be.eql(400);
                });
            done();
        });
    });

    // show
    describe('api/v1/questions/{questionID}', () => {
        it('should return  a question', (done) => {
            const questionID = 1;
            chai.request(server)
                .get(`/api/v1/questions/${questionID}`)
                .end((err, res) => {
                    res.status.should.be.eql(200);
                });
            done();
        });

        it('should return error if question does not exist', (done) => {
            chai.request(server)
                .get('/api/v1/questions/90')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.error.should.be.eql('Question does not exist');
                });
            done();
        });
    });


    // upvotes
    describe('api/v1/questions/{questionID}/upvote', () => {
        it('should return upvotes of a question', (done) => {
            const questionID = 1;
            const questionUpvotes = questions[questionID - 1].upvotes;
            chai.request(server)
                .patch(`/api/v1/questions/${questionID}/upvote`)
                .end((err, res) => {
                    res.status.should.be.eql(200);
                    expect(res.body.data.upvotes - questionUpvotes).to.eql(1);
                });
            done();
        });

        it('should return error if question does not exist', (done) => {
            chai.request(server)
                .patch('/api/v1/questions/90/upvote')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.error.should.be.eql('Question does not exist');
                });
            done();
        });
    });

    // downvotes
    describe('api/v1/questions/{questionID}/downvote', () => {
        it('should return downvotes of a question', (done) => {
            const questionID = 1;
            const questionDownvotes = questions[questionID - 1].downvotes;
            chai.request(server)
                .patch(`/api/v1/questions/${questionID}/downvote`)
                .end((err, res) => {
                    res.status.should.be.eql(200);
                    expect(res.body.data.downvotes - questionDownvotes).to.eql(1);
                });
            done();
        });

        it('should return error if question does not exist', (done) => {
            chai.request(server)
                .patch('/api/v1/questions/90/downvote')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.error.should.be.eql('Question does not exist');
                });
            done();
        });
    });
});