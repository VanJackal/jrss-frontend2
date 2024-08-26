import type {IFeeds} from "$lib/api/routes/IFeeds";
import {Feeds} from "$lib/api/routes/Feeds";
import type {AxiosInstance} from "axios";
import {Articles} from "$lib/api/routes/Articles";
import type {IArticles} from "$lib/api/routes/IArticles";

/**
 * @Created 2024-08-26
 * @Brief class containing the top level routes for the api
 */
export class Rest {
    public readonly _feedsApi:IFeeds
    public readonly _articlesApi:IArticles

    constructor(private Axios:AxiosInstance) {
        this._feedsApi = new Feeds(Axios)
        this._articlesApi = new Articles(Axios)
    }

    get feeds() {
        return this._feedsApi
    }

    get articles() {
        return this._articlesApi
    }

}