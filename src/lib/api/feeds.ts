import {PUBLIC_API} from "$env/static/public";
import axios from "./axiosWrap.js";
import {APIError} from "./APIError"

//todo these should wrap the http errors and add context
//todo the ui needs a generic top level error handler (should just toast with the error)

export type FeedDetails = {
    url:string,
    title:string,
    shortTitle:string,
    description:string
}

export type ArticleEntry = {
    id:string,
    title:string,
    read:boolean,
    date:Date
}
export type ArticleFactory = () => Promise<ArticleEntry[]>

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

export const getFeed = async (id: string):Promise<FeedDetails|null> => {
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
        //throw new APIError("Failed to get Feed")
        //todo this should throw the error
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

export const addFeed = async ({url, title, shortTitle, description}:FeedDetails) => {
    const res = await axios.post(PUBLIC_API + "/feeds/",{
        link:url,
        title:title,
        shortTitle:shortTitle,
        description:description
    })
    return res.data;
}

export const getFeedDetails = async (url:string):Promise<FeedDetails> => {
    const res = await axios.post(PUBLIC_API + "/util/feeds/info",{url:url})
    const data = res.data
    return {
        url:url,
        title:data.title,
        description:data.description,
        shortTitle:"",
    };
}

export const updateFeed = async (id:string, {url, title, shortTitle, description}:FeedDetails) => {
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

export const getArticles = async (feedid:string):Promise<ArticleEntry[]> => {
    try {
        const res = await axios.get(PUBLIC_API + `/feeds/${feedid}/articles`)
        let articles:ArticleEntry[] = []
        res.data.forEach((article:any) => {
            articles.push({
                id: article._id,
                date: new Date(article.pubDate),
                title: article.title,
                read: article.read
            })
        })
        return articles
    } catch (e){
        console.error(e)
        throw new APIError("Failed to get articles")
    }
}