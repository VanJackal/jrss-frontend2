import type {IFeedsManager} from "$lib/api/Client/IFeedsManager";
import  {type Feed} from "$lib/api/Feed";
import type {IFeeds} from "$lib/api/routes/IFeeds";

export class FeedsManager implements IFeedsManager {// todo finish
    constructor(private feeds:IFeeds) {
    }
    async getFeed(id: string): Promise<Feed> {
        throw "NotImplemented" // todo this class might need to take in a factory object, and this function (and the others) should make the return object using a factory method
    }

    async getFeeds(): Promise<Feed[]> {
        return []
    }

    async updateFeeds(): Promise<void> {
        return undefined
    }
}