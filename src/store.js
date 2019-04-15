import {createStore, combineReducers} from 'redux';
import userReducer from './reducer/UserReducer';
import timeReducer from './reducer/TimeReducer';

const allReducer = combineReducers({
    timeReducer,
    userReducer
});

export default createStore(allReducer, window.devToolsExtension && window.devToolsExtension());