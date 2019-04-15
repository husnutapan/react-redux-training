import {USER_LOGIN_DATA} from "../action/ActionTypes";

export default function userReducer(state = {}, {type, payload}) {
    switch (type) {
        case USER_LOGIN_DATA:
            return payload;
        default:
            return state;
    }
}