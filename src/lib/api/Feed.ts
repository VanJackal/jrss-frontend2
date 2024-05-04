import {type ArticleEntry, type FeedDetails, getFeed, getArticles} from "$lib/api/feeds";

export abstract class Feed {
	protected constructor(protected feedId: string, protected feed:FeedDetails) {

	}

	static async fetchFeed(feedId:string):Promise<Feed> {
		const feed:FeedDetails|null = await getFeed(feedId);

		if (!feed) {
			// set to null object if we dont have a feed
			return new NullFeed()
		} else {
			//otherwise set to the feed
			return new BasicFeed(feedId,feed)
		}

	}

	/**
	 * get the list of articles for this Feed
	 */
	public abstract getArticles():Promise<ArticleEntry[]>

}

export class BasicFeed extends Feed{
	public override async getArticles():Promise<ArticleEntry[]> {
		return getArticles(this.feedId)
	}
}

//null object class for feeds
export class NullFeed extends Feed{
	constructor() {
		super("NULL_FEED",{description: "NULL", shortTitle: "NULL", title: "NULL", url: "NULL"})
	}
	public async getArticles(): Promise<ArticleEntry[]> {
		return []
	}
}