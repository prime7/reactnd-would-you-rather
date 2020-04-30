import * as types from '../types'
import {saveQuestionAnswer} from '../../utils/api'
import {addAnswerToQuestion} from './questions'

export const receiveUsers = (users) => {
    return {
        type: types.RECEIVE_USERS,
        users
    };
}

const addAnswerToUser = (authUser, qid, answer) => {
    return {
        type: types.ADD_ANSWER_TO_USER,
        authUser,
        qid,
        answer
    };
}

export const handleSaveQuestionAnswer = (authUser, qid, answer) => {
    return dispatch => {
        dispatch(addAnswerToUser(authUser, qid, answer));
        dispatch(addAnswerToQuestion(authUser, qid, answer));
  
        return saveQuestionAnswer(authUser, qid, answer).catch(e => {
            console.warn('Error in handleSaveQuestionAnswer:', e);
        });
    };
}
  
export const addQuestionToUser = ({ id, author }) => {
    return {
        type: types.ADD_QUESTION_TO_USER,
        id,
        author
    };
}