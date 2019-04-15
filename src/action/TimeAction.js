import {SERVER_TIME_DATA} from "./ActionTypes";


export function updateServerTime(serverTime) {
    return {
        type: SERVER_TIME_DATA,
        payload: {
            users: serverTime
        }
    }
}