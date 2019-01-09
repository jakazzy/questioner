const faker = require('faker');

const comments = [{
    id: 1,
    body: faker.lorem.sentences(),
    user_id: 1,
    createdOn: faker.date.recent(),
    updatedOn: faker.date.recent(),
    question_id: 1,
}, {
    id: 2,
    body: faker.lorem.sentences(),
    user_id: 2,
    createdOn: faker.date.recent(),
    updatedOn: faker.date.recent(),
    question_id: 2,
}];