import * as types from '../types'

export default function authUser(state = null, action) {
    if (action.type === types.SET_AUTH_USER) {
        return action.id;
    }
    return state;
}