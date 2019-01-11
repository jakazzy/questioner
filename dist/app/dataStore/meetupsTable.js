"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _faker = require("faker");

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    id: 1,
    createdOn: _faker2.default.date.recent(),
    location: _faker2.default.address.streetAddress(),
    city: _faker2.default.address.city(),
    image: _faker2.default.image.image(),
    topic: _faker2.default.lorem.sentence(),
    description: _faker2.default.lorem.words(),
    startTime: _faker2.default.date.recent(),
    endTime: _faker2.default.date.future(),
    done: true,
    userID: 1
}, {
    id: 2,
    createdOn: _faker2.default.date.recent(),
    location: _faker2.default.address.streetAddress(),
    city: _faker2.default.address.city(),
    image: _faker2.default.image.image(),
    topic: _faker2.default.lorem.sentence(),
    description: _faker2.default.lorem.words(),
    startTime: _faker2.default.date.recent(),
    endTime: _faker2.default.date.future(),
    done: false,
    userID: 2
}];
//# sourceMappingURL=meetupsTable.js.map