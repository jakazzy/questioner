'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    id: 1,
    firstName: _faker2.default.name.firstName(),
    lastName: _faker2.default.name.lastName(),
    otherName: _faker2.default.name.firstName(),
    email: _faker2.default.email(),
    phoneNumber: _faker2.default.phone.phoneNumber(),
    userName: _faker2.default.name.firstName(),
    registered: _faker2.default.date.past(),
    isAdmin: true,
    passwordDigest: '',
    bio: _faker2.default.lorem.word()
}, {
    id: 2,
    firstName: _faker2.default.name.firstName(),
    lastName: _faker2.default.name.lastName(),
    otherName: _faker2.default.name.firstName(),
    email: _faker2.default.email(),
    phoneNumber: _faker2.default.phone.phoneNumber(),
    userName: _faker2.default.name.firstName(),
    registered: _faker2.default.date.past(),
    isAdmin: false,
    passwordDigest: '',
    bio: _faker2.default.lorem.word()
}];
//# sourceMappingURL=usersTable.js.map