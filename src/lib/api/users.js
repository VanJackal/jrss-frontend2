import {PUBLIC_API} from "$env/static/public";
import axios from './axiosWrap.js'

export const login = async (username, password) => {
    return axios.post(PUBLIC_API + "/users/login", {
        username:username,
        password:password
    })
}

export const logout = async () => {
    return axios.post( PUBLIC_API + "/users/logout")
}

export const register = async (username, password) => {
    return axios.post(PUBLIC_API + "/users/register", {
        username:username,
        password:password
    })
}
