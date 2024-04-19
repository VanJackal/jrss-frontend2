import {PUBLIC_API} from "$env/static/public";
import axios from "./axiosWrap.js";
import {writable} from "svelte/store";

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

export const addFeed = async (url, title, shortTitle, description) => {
    const res = await axios.post(PUBLIC_API + "/feeds/",{
        link:url,
        title:title,
        shortTitle:shortTitle,
        description:description
    })
    return res.data;
}

export const getFeedDetails = async (url) => {
    const res = await axios.post(PUBLIC_API + "/util/feeds/info",{url:url})
    return res.data;
}

export class Feed{
    constructor() {
        this.feedUrl = writable("");
        this.feedTitle = writable("");
        this.feedShortTitle = writable("");
        this.feedDescription = writable("");
    }

    getRequest(){
        return {
            link:this.feedUrl,
            title:this.feedTitle,
            shortTitle:this.feedShortTitle,
            description:this.feedDescription
        }
    }

    async updateDetails(feedUrl) {
        const res = await getFeedDetails(feedUrl)
        this.feedTitle.set(res.title);
        this.feedShortTitle.set(res.shortTitle)
        this.feedDescription.set(res.description)
    }

    async addFeed() {
        return addFeed(this.feedUrl,this.feedTitle,this.feedShortTitle,this.feedDescription)
    }
}