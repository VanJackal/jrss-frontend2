import type {FullArticle} from "$lib/api/routes/Types";

export interface IArticles {
    /**
     * get an article from its id
     * @param id id of the article to get
     */
    getArticle(id:string):Promise<FullArticle>

    /**
     * set the read status of an article
     * @param id article to set the read state of
     * @param read read state to set to
     */
    setRead(id:string, read:boolean):Promise<void>
}