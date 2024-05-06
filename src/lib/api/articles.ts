import {PUBLIC_API} from "$env/static/public";
import axios from "./axiosWrap.js";
import {APIError} from "./APIError"
import type {ArticleEntry} from "$lib/api/feeds";

export type FullArticle = ArticleEntry & {
	description:string,
	enclosure:any,
	uuid:string,
}

export async function getArticle(id:string):Promise<FullArticle> {
	try {
		const res = (await axios.get(`${PUBLIC_API}/articles/${id}`)).data
		return {
			date: new Date(res.date),
			description: res.description,
			enclosure: undefined,
			id: res._id,
			title: res.title,
			unread: res.unread,
			uuid: res.uuid
		}
	} catch(e) {
		console.error(e)
		throw new APIError(`Failed to get article with id: ${id}`)
	}
}

export const setUnread = async (id:string, unread:boolean) => {
	return axios.patch(PUBLIC_API + `/articles/${id}`,{
		unread:unread
	})
}

export const deleteArticle = async (id:string) => {
	return axios.delete(PUBLIC_API + `/articles/${id}`)
}
