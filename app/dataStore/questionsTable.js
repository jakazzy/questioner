const faker = require("faker");
module.exports = [{
    id: 1,
    createdOn: faker.date.recent(),
    userID: 1,
    meetupID: 1,
    title: faker.lorem.sentence(),
    body: faker.lorem.words(),
    upvotes: faker.random.number(),
    downvotes: faker.random.number()
}, {
    id: 2,
    createdOn: faker.date.recent(),
    userID: 2,
    meetupID: 2,
    title: faker.lorem.sentence(),
    body: faker.lorem.words(),
    upvotes: faker.random.number(),
    downvotes: faker.random.number()
}]