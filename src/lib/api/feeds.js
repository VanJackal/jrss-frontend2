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