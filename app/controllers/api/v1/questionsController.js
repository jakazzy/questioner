const { validationResult } = require('express-validator/check');
const questions = require('./../../../dataStore/questionsTable');
const errorMessage = ({ msg }) => msg;


module.exports = {
    index(req, res) {
        res.json({
            status: 200,
            data: questions,
        });
    },

    create(req, res) {
        const errors = validationResult(req).formatWith(errorMessage);
        if (!errors.isEmpty()) {
            res.status(400).json({
                status: 400,
                errors: errors.array(),
            });
            return;
        }

        const question = req.body;
        question.id = questions.length + 1;
        questions.push(question);
        res.status(201).json({
            status: 201,
            data: question,
        });
    },

    show(req, res) {
        const question = questions[req.params.questionID - 1];
        if (question == undefined) {
            res.status(404).json({
                status: 404,
                error: 'Question does not exist',
            });
            return;
        }

        res.status(200).json({
            status: 200,
            data: question,
        });
    },

    upvote(req, res) {
        const question = questions[req.params.questionID - 1];
        if (question == undefined) {
            res.status(404).json({
                status: 404,
                error: 'Question does not exist',
            });
            return;
        }

        question.upvotes += 1;
        res.status(200).json({
            status: 200,
            data: question,
        });
    },

    downvote(req, res) {
        const question = questions[req.params.questionID - 1];
        if (question == undefined) {
            res.status(404).json({
                status: 404,
                error: 'Question does not exist',
            });
            return;
        }

        question.downvotes += 1;
        res.status(200).json({
            status: 200,
            data: question,
        });
    },
};