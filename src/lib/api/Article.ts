import type {ArticleEntry} from "$lib/api/feeds";
import {type FullArticle, getArticle, setRead} from "$lib/api/articles";
import {ReadState} from "$lib/api/ReadState";

export class Article {
	private fullArticle:FullArticle|null;
	private read:ReadState
	public constructor(private entry:ArticleEntry) {
		this.fullArticle = null;
		this.read = new ReadState(entry.read)
	}

	/**
	 * get the id of the article
	 */
	public getID() {
		return this.entry.id
	}

	/**
	 * get the articles title
	 */
	public getTitle() {
		return this.entry.title
	}

	/**
	 * get whether the article has been read
	 */
	public getRead(){
		return this.read.get()
	}

	/**
	 * set whether the article has been read
	 * @param read true for when the article is read
	 */
	public async setRead(read:boolean) {
		await setRead(this.entry.id, read)
		this.read.set(read)
	}

	/**
	 * get the state handler for the read status of the article
	 */
	public getReadState():ReadState {
		return this.read
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

	/**
	 * get the articles description / contents
	 */
	public async getDescription() {
		return (await this.getFullArticle()).description
	}

	public async getUUID() {
		return (await this.getFullArticle()).uuid
	}

	public async getEnclosure() {
		return (await this.getFullArticle()).enclosure
	}

	public async getLink() {
		return (await this.getFullArticle()).link
	}
}