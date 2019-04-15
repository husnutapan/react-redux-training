import React, {Component} from 'react';

import {connect} from 'react-redux';

import UserService from '../services/UserService';
import TimeService from '../services/TimeService';

import store from '../store';

import {updateUser, updateTime} from "../action/UserAction";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.loginUserService = new UserService();
        this.serverGetTime = new TimeService();
    }

    componentDidMount() {
        let userData = {"id": 1, "name": "husnu", "password": "kevser"};

        this.loginUserService.loginUserFunc(userData).then(res => {
            store.dispatch(updateUser(res));
        });

        this.serverGetTime.timeGetFunc().then(res => {
            store.dispatch(updateTime(res));
        });
    }

    render() {
        if (this.props.users !== undefined) {
            return (
                <div>
                    {this.props.users.name}
                    {this.props.serverTime}
                </div>
            );
        } else
            return <div></div>

    }
}

const mapStateToProps = (store) => {
    return {
        users: store.userReducer.users,
        serverTime: store.timeReducer.serverTime

    };
};
export default connect(mapStateToProps)(Login);
