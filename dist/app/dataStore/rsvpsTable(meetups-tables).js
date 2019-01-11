'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    id: 1,
    userID: 1,
    meetupID: 1,
    invitees: _faker2.default.random.number()
}, {
    id: 2,
    userID: 2,
    meetupID: 2,
    invitees: _faker2.default.random.number()
}, {
    id: 3,
    userID: 1,
    meetupID: 2,
    invitees: _faker2.default.random.number()
}, {
    id: 4,
    userID: 1,
    meetupID: 2,
    invitees: _faker2.default.random.number()
}, {
    id: 5,
    userID: 2,
    meetupID: 2,
    invitees: _faker2.default.random.number()
}, {
    id: 6,
    userID: 2,
    meetupID: 1,
    invitees: _faker2.default.random.number()
}, {
    id: 7,
    userID: 1,
    meetupID: 2,
    invitees: _faker2.default.random.number()
}, {
    id: 8,
    userID: 1,
    meetupID: 1,
    invitees: _faker2.default.random.number()
}];
//# sourceMappingURL=rsvpsTable(meetups-tables).js.map