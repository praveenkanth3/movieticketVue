import axios from "axios";
import { API_URL } from '../constants/constantValue';

/* eslint-disable */
class apiServices {
    //api call for to get the all user
    static getUsers() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(API_URL);
                const data = res.data;
                resolve(data);
            }
            catch(err) {
                reject(err);
            }
        })

    }

    //api call for create a new user
    static createUser(payload) {
        return axios.post(API_URL,payload)
    }

    static getAllBookedTickets() {
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${API_URL}/updatetickets`);
                const data = res.data;
                resolve(data);
            } catch(err) {
                reject(err)
            }
        })
    }

    static updateTickets(payload) {
        return axios.post(`${API_URL}/updatetickets`,payload);
    }
}

export default apiServices;