import type {IArticles} from "$lib/api/routes/IArticles";
import type { FullArticle } from "./Types";
import type {AxiosInstance} from "axios";

export class Articles implements IArticles {
    constructor(private Axios:AxiosInstance) {
    }
    async getArticle(id: string): Promise<FullArticle> {
        const res = await this.Axios.get("/articles/" + id)
        return res.data
    }
    async setRead(id: string, read: boolean): Promise<void> {
        await this.Axios.patch("/articles/" + id, {read:read})
    }

}