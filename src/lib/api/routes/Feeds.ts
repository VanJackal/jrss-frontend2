import type {IFeeds} from "$lib/api/routes/IFeeds";
import type { FeedsUnread, FeedDetails, FeedProgenitor, ArticleEntry } from "./Types";
import type {AxiosInstance} from "axios";
import {APIError} from "$lib/api/APIError";

export class Feeds implements IFeeds {
    constructor(private Axios:AxiosInstance) {
    }
    async getFeeds(): Promise<FeedsUnread[]> {
        const res = await this.Axios.get("/feeds/")
        return res.data
    }
    async getFeed(id: string): Promise<FeedDetails> {
        const res = await this.Axios.get("/feeds/" + id)
        return res.data
    }
    async removeFeed(id: string): Promise<void> {
        const res = await this.Axios.delete("/feeds/" + id)
        return res.data
    }
    async updateFeeds(): Promise<void> {
        const res = await this.Axios.post("/util/feeds/refresh")
        return res.data
    }
    async addFeed(details: FeedDetails): Promise<FeedProgenitor> {
        const res = await this.Axios.post("/feeds/",details)
        return res.data
    }
    async getFeedDetails(url: string): Promise<FeedDetails> {
        const res = await this.Axios.post("/util/feeds/info",{url:url})
        return res.data
    }
    async updateFeed(id:string, details: FeedDetails): Promise<void> {
        const res = await this.Axios.patch("/feeds/" + id, details)
        return res.data
    }
    async getArticles(feedId: string): Promise<ArticleEntry[]> {
        if (feedId == null || feedId.length == 0) throw new APIError("Invalid feed id")
        const res = await this.Axios.get(`/feeds/${feedId}/articles`)
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
    }
}