import {PUBLIC_API} from "$env/static/public";
import axios from "./axiosWrap.js";

//todo these should wrap the http errors and add context
//todo the ui needs a generic top level error handler (should just toast with the error)

export type Feed = {
    url:string,
    title:string,
    shortTitle:string,
    description:string
}

export type ArticleEntry = {
    title:string,
    unread:boolean,
    date:Date
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

export const removeFeed = async (id: string) => {
    await axios.delete(PUBLIC_API + "/feeds/" + id)
}

export const getFeed = async (id: string):Promise<Feed|null> => {
    try {
        const res = await axios.get(PUBLIC_API + "/feeds/" + id)
        const data = res.data
        return {
            url:data.link,
            title: data.title,
            description: data.description,
            shortTitle: data.shortTitle,
        }
    } catch (e){
        return null
    }
}

export const updateFeeds = async () => {
    try{
        const res = await axios.post(PUBLIC_API + "/util/feeds/refresh")
        console.debug(res)
        return res.data
    } catch (e) {
        return null
    }
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

export const updateFeed = async (id:string, {url, title, shortTitle, description}:Feed) => {
    try {
        await axios.patch(PUBLIC_API + "/feeds/"+id, {
            link:url,
            title:title,
            shortTitle:shortTitle,
            description:description
        })

    } catch (e) {
        throw new APIError("Failed to update feed")
    }
}