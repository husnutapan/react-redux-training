import {SERVER_TIME_DATA} from "../action/ActionTypes";

export default function timeReducer(state = {}, {type, payload}) {
    switch (type) {
        case SERVER_TIME_DATA:
            return payload;
        default:
            return state;
    }
}