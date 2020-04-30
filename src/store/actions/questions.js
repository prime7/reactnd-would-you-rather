import * as types from '../types'
import { saveQuestion } from '../../utils/api'
import { addQuestionToUser } from '../actions/users'


export const receiveQuestions = (questions) => {
    return {
        type: types.RECEIVE_QUESTIONS,
        questions
    };
}

export const addAnswerToQuestion = (authUser, qid, answer) => {
    return {
        type: types.ADD_ANSWER_TO_QUESTION,
        authUser,
        qid,
        answer
    };
}

const addQuestion = (question) => {
    return {
        type: types.ADD_QUESTION,
        question
    };
}
  
export const handleSaveQuestion = (optionOneText, optionTwoText, author) => {
    return dispatch => {
            return saveQuestion({ optionOneText, optionTwoText, author }).then(
                question => {
                    dispatch(addQuestion(question));
                    dispatch(addQuestionToUser(question));
            }
        );
    };
}