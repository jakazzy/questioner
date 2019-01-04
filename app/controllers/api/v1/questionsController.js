let questions = require("./../../../dataStore/questionsTable");

module.exports = {
    index: function(req, res) {
        res.json(questions)
    },

    create: function(req, res) {
        let question = req.body;
        question.id = questions.length + 1;
        questions.push(question);
        res.status(201).json({
            status: 201,
            data: question
        })
    },

    show: function(req, res) {
        let question = questions[req.params.questionID - 1];
        if (question == undefined) {
            res.status(404).json({
                status: 404,
                error: "Question does not exist"
            })
            return
        }

        res.status(200).json({
            status: 200,
            data: question
        })
    },

    upvote: function(req, res) {
        let question = questions[req.params.questionID - 1];
        if (question == undefined) {
            res.status(404).json({
                status: 404,
                error: "Question does not exist"
            })
            return
        }

        question.upvotes += 1;
        res.status(200).json({
            status: 200,
            data: question
        })
    },

    downvote: function(req, res) {
        let question = questions[req.params.questionID - 1];
        if (question == undefined) {
            res.status(404).json({
                status: 404,
                error: "Question does not exist"
            })
            return
        }

        question.downvotes += 1;
        res.status(200).json({
            status: 200,
            data: question
        })
    }
}