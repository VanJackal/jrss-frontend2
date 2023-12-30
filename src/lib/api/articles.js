import {PUBLIC_API} from "$env/static/public";
import axios from 'axios'
export const getArticle = async (id) => {
    return axios.get(PUBLIC_API + `/articles/${id}`)
}
export const setRead = async (id, read) => {
    return axios.patch(PUBLIC_API + `/articles/${id}`,{
        read:read
    })
}
export const deleteArticle = async (id) => {
    return axios.delete(PUBLIC_API + `/articles/${id}`)
}