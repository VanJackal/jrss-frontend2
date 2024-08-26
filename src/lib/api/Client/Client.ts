import type {IFeedsManager} from "$lib/api/Client/IFeedsManager";
import type {AxiosInstance} from "axios";
import {FeedsManager} from "$lib/api/Client/FeedsManager";
import {Rest} from "$lib/api/Client/Rest";

/**
 * @Created 2024-08-13
 * @Brief provide a client interface to the api functions and hold some config
 * for interactions with the api
 */
export class Client {//todo finish implementation
    private readonly _feedsManager:IFeedsManager
    private readonly _rest:Rest

    constructor(private Axios:AxiosInstance) {

        this._feedsManager = new FeedsManager(this)
        this._rest = new Rest(Axios);
    }

}