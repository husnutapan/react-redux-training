import {USER_LOGIN_DATA, SERVER_TIME_DATA} from './ActionTypes'

export function updateUser(newUser) {
    return {
        type: USER_LOGIN_DATA,
        payload: {
            users: newUser
        }
    }
}


export function updateTime(serverTime) {
    return {
        type: SERVER_TIME_DATA,
        payload: {
            serverTime: serverTime
        }
    }
}