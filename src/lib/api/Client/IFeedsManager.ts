import type {Feed} from "$lib/api/Feed";

/**
 * @Created 2024-08-13
 * @Brief handle client interactions for feeds route
 */
export interface IFeedsManager {
    /**
     * get a feed object from its id
     * @param id id of the feed to get
     */
    getFeed(id:string):Promise<Feed>

    /**
     * get all the feeds for a client
     */
    getFeeds():Promise<Feed[]>

    /**
     * update the users feeds
     */
    updateFeeds():Promise<void> //todo add a return if/when this is strictly defined
}