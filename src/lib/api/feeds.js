import {PUBLIC_API} from "$env/static/public";
import axios from "./axiosWrap.js";

export const getFeeds = async () => {
    try {
        const res = await axios.get(PUBLIC_API + "/feeds/")
        console.log(res)
        return res.data
    } catch (e){
        return []
    }
}

export const updateFeeds = async () => {
    const res = await axios.post(PUBLIC_API + "/util/feeds/refresh")
    console.debug(res)
    return res.data
}