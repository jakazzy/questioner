const faker = require("faker");
module.exports = [{
    id: 1,
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
}, {
    id: 2,
    createdOn: faker.date.recent(),
    location: faker.address.streetAddress(),
    city: faker.address.city(),
    image: faker.image.image(),
    topic: faker.lorem.sentence(),
    description: faker.lorem.words(),
    startTime: faker.date.recent(),
    endTime: faker.date.future(),
    done: false,
    userID: 2
}];