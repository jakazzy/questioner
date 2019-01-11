'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    id: 1,
    body: _faker2.default.lorem.sentences(),
    user_id: 1,
    createdOn: _faker2.default.date.recent(),
    updatedOn: _faker2.default.date.recent(),
    question_id: 1
}, {
    id: 2,
    body: _faker2.default.lorem.sentences(),
    user_id: 2,
    createdOn: _faker2.default.date.recent(),
    updatedOn: _faker2.default.date.recent(),
    question_id: 2
}];
//# sourceMappingURL=commentsTable.js.map