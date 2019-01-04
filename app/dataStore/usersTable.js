const faker = require("faker");

let users = [{
        id: 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        otherName: faker.name.firstName(),
        email: faker.email(),
        phoneNumber: faker.phone.phoneNumber(),
        userName: faker.name.firstName(),
        registered: faker.date.past(),
        isAdmin: true,
        passwordDigest: "",
        bio: faker.lorem.word(),
    },
    {
        id: 2,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        otherName: faker.name.firstName(),
        email: faker.email(),
        phoneNumber: faker.phone.phoneNumber(),
        userName: faker.name.firstName(),
        registered: faker.date.past(),
        isAdmin: false,
        passwordDigest: "",
        bio: faker.lorem.word(),
    }
];