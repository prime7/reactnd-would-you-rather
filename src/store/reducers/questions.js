import * as types from '../types'

export default function questions(state = {}, action) {
    switch (action.type) {
        case types.RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case types.ADD_ANSWER_TO_QUESTION:
            const { authUser, qid, answer } = action;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                    ...state[qid][answer],
                    votes: state[qid][answer].votes.concat(authUser)
                    }
                }
            };
        case types.ADD_QUESTION:
            const { question } = action;

            return {
                ...state,
                [question.id]: question
            };
        default:
            return state;
    }
}