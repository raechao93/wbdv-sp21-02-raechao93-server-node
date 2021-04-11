const questions = require('./questions.json')

const findAllQuestions=() => {
    return questions;
}

const findQuestionsForQuiz=(quizId) =>{
    return questions.filter(question => question.quizId === quizId)
}

const findQuestionById=(questionId) =>{
    return questions.find((question)=>{
        return question._id === questionId;
    });
}

module.exports ={
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById
}