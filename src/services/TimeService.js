import axios from 'axios';
import {backendAddress} from '../config/config';

export default class TimeService {

    async timeGetFunc() {
        return await axios.get(backendAddress + 'user/getTime')
            .then(res => {
                return res.data;
            })
            .catch(res => {
            });
    }
}