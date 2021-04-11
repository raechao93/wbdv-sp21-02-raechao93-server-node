const quizzes = require('./quizzes.json')


//TODO: node.js assignment this week

const findAllQuizzes = () => {
    return quizzes
}

const findQuizById = (quizId) => {
    return quizzes.find((quiz) => {
        return quiz._id === quizId
    })
}

console.log(findAllQuizzes())

//TODO: mongoDB assignment next week
const createQuiz = () => {}
const deleteQuiz = () => {}
const updateQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes,
    deleteQuiz,
    findQuizById,
    updateQuiz
}