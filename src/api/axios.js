import axios from 'axios';
import {configurations} from '../config/configuration'


const axiosBaseURL = axios.create({
    baseURL: configurations.baseUrl
});

export default axiosBaseURL
