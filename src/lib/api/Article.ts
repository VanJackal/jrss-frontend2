import type {ArticleEntry} from "$lib/api/feeds";
import {type FullArticle, getArticle, setRead} from "$lib/api/articles";

export class Article {
	private fullArticle:FullArticle|null;
	public constructor(private entry:ArticleEntry) {
		this.fullArticle = null;
	}

	public getID() {
		return this.entry.id
	}
	public getTitle() {
		return this.entry.title
	}
	public getRead(){
		return this.entry.read
	}
	public async setRead(read:boolean) {
		await setRead(this.entry.id, read)
		this.entry.read = read
	}

	public getDate() {
		return this.entry.date
	}

	private async getFullArticle() {
		if(this.fullArticle == null) {
			this.fullArticle = await getArticle(this.getID())
		}
		return this.fullArticle
	}

	public async getDescription() {
		return (await this.getFullArticle()).description
	}

	public async getUUID() {
		return (await this.getFullArticle()).uuid
	}

	public async getEnclosure() {
		return (await this.getFullArticle()).enclosure
	}
}