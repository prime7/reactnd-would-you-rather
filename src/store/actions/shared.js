import { getInitialData } from '../../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

export const handleInitialData = () => {
    return dispatch => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
        });
    };
}