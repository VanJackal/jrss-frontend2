import {type FeedDetails, getFeed} from "$lib/api/feeds";
import {APIError} from "$lib/api/APIError";

export class Feed {
	constructor(private feedId: string, private feed:FeedDetails) {

	}

	static async fetchFeed(feedId:string):Promise<Feed> {
		const feed:FeedDetails|null = await getFeed(feedId);
		if (!feed) { //todo remove this if when the types are properly sorted
			throw new APIError("error getting feed details")
		}

		return new Feed(feedId,feed)
	}
}