import * as types from '../types'

export const setAuthUser = (id) => {
    return {
        type: types.SET_AUTH_USER,
        id
    }
}