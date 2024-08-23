import type {FeedProgenitor, FeedsUnread, FeedDetails, ArticleEntry} from "$lib/api/routes/Types";

/**
 * @Created 2024-08-13
 * @Brief Interface for the api /feeds routes
 */
export interface IFeeds {
    /**
     * get all the feeds for the user
     */
    getFeeds():Promise<FeedsUnread[]>

    /**
     * get a feed by its id
     * @param id id of the feed to get
     */
    getFeed(id:string):Promise<FeedDetails>

    /**
     * remove a feed by its id
     * @param id id of the feed to remove
     */
    removeFeed(id:string):Promise<void>

    /**
     * update feeds from remote sources
     */
    updateFeeds():Promise<void>

    /**
     * add a new feed from its details
     * @param details details to add as a feed
     */
    addFeed(details:FeedDetails):Promise<FeedProgenitor>

    /**
     * get the details of a feed from a remote source
     * @param url url of the rss feed
     */
    getFeedDetails(url:string):Promise<FeedDetails>

    /**
     * update a feeds details to a new set of details,
     * @param id id of the feed to update
     * @param details details to update to
     */
    updateFeed(id:string, details:FeedDetails):Promise<void>

    /**
     * get the articles from a feed
     * @param feedId
     */
    getArticles(feedId:string):Promise<ArticleEntry[]>
}