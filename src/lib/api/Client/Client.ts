import type {IFeedsManager} from "$lib/api/Client/IFeedsManager";
import type {IFeeds} from "$lib/api/routes/IFeeds";
import type {IArticles} from "$lib/api/routes/IArticles";
import type {AxiosInstance} from "axios";
import {Feeds} from "$lib/api/routes/Feeds";
import {FeedsManager} from "$lib/api/Client/FeedsManager";
import {Articles} from "$lib/api/routes/Articles";

/**
 * @Created 2024-08-13
 * @Brief provide a client interface to the api functions and hold some config
 * for interactions with the api
 */
class Client {//todo finish implementation
    public readonly _feedsManager:IFeedsManager

    public readonly _feedsApi:IFeeds
    public readonly _articlesApi:IArticles

    constructor(private Axios:AxiosInstance) {
        this._feedsApi = new Feeds(Axios)
        this._articlesApi = new Articles(Axios)

        this._feedsManager = new FeedsManager(this._feedsApi)
    }


}