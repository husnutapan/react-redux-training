import axios from 'axios';
import {backendAddress} from '../config/config';

export default class UserService {

    async loginUserFunc(userLoginData) {
        return await axios.post(backendAddress + 'user/login', userLoginData)
            .then(res => {
                return res.data;
            })
            .catch(res => {
            });
    }
}