'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _check = require('express-validator/check');

var _questionsTable = require('../../../dataStore/questionsTable');

var _questionsTable2 = _interopRequireDefault(_questionsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorMessage = function errorMessage(_ref) {
    var msg = _ref.msg;
    return msg;
};

exports.default = {
    index: function index(req, res) {
        res.json({
            status: 200,
            data: _questionsTable2.default
        });
    },

    create: function create(req, res) {
        var errors = (0, _check.validationResult)(req).formatWith(errorMessage);
        if (!errors.isEmpty()) {
            res.status(400).json({
                status: 400,
                errors: errors.array()
            });
            return;
        }

        var question = req.body;
        question.id = _questionsTable2.default.length + 1;
        _questionsTable2.default.push(question);
        res.status(201).json({
            status: 201,
            data: question
        });
    },

    show: function show(req, res) {
        var question = _questionsTable2.default[req.params.questionID - 1];
        if (question === undefined) {
            res.status(404).json({
                status: 404,
                error: 'Question does not exist'
            });
            return;
        }

        res.status(200).json({
            status: 200,
            data: question
        });
    },

    upvote: function upvote(req, res) {
        var question = _questionsTable2.default[req.params.questionID - 1];
        if (question === undefined) {
            res.status(404).json({
                status: 404,
                error: 'Question does not exist'
            });
            return;
        }

        question.upvotes += 1;
        res.status(200).json({
            status: 200,
            data: question
        });
    },

    downvote: function downvote(req, res) {
        var question = _questionsTable2.default[req.params.questionID - 1];
        if (question === undefined) {
            res.status(404).json({
                status: 404,
                error: 'Question does not exist'
            });
            return;
        }

        question.downvotes += 1;
        res.status(200).json({
            status: 200,
            data: question
        });
    }
};
//# sourceMappingURL=questionsController.js.map