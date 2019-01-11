'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    id: 1,
    createdOn: _faker2.default.date.recent(),
    userID: 1,
    meetupID: 1,
    title: _faker2.default.lorem.sentence(),
    body: _faker2.default.lorem.words(),
    upvotes: _faker2.default.random.number(),
    downvotes: _faker2.default.random.number()
}, {
    id: 2,
    createdOn: _faker2.default.date.recent(),
    userID: 2,
    meetupID: 2,
    title: _faker2.default.lorem.sentence(),
    body: _faker2.default.lorem.words(),
    upvotes: _faker2.default.random.number(),
    downvotes: _faker2.default.random.number()
}];
//# sourceMappingURL=questionsTable.js.map