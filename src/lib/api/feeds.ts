import {PUBLIC_API} from "$env/static/public";
import axios from "./axiosWrap.js";

export type Feed = {
    url:string,
    title:string,
    shortTitle:string,
    description:string
}

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

export const addFeed = async ({url, title, shortTitle, description}:Feed) => {
    const res = await axios.post(PUBLIC_API + "/feeds/",{
        link:url,
        title:title,
        shortTitle:shortTitle,
        description:description
    })
    return res.data;
}

export const getFeedDetails = async (url:string):Promise<Feed> => {
    const res = await axios.post(PUBLIC_API + "/util/feeds/info",{url:url})
    const data = res.data
    return {
        url:url,
        title:data.title,
        description:data.description,
        shortTitle:"",
    };
}