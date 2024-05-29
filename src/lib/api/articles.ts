import {PUBLIC_API} from "$env/static/public";
import axios from "./axiosWrap.js";
import {APIError} from "./APIError"
import type {ArticleEntry} from "$lib/api/feeds";

export type Enclosure = {
	url:string,
	length?:number,
	type?:string
}

export type FullArticle = ArticleEntry & {
	description:string,
	enclosure?:Enclosure,
	uuid:string,
	link?:string
}

export async function getArticle(id:string):Promise<FullArticle> {
	try {
		const res = (await axios.get(`${PUBLIC_API}/articles/${id}`)).data
		return {
			date: new Date(res.date),
			description: res.description,
			enclosure: res.enclosure ? {
				url: res.enclosure.url,
				length: res.enclosure.length,
				type: res.enclosure.type
			} : undefined,
			id: res._id,
			title: res.title,
			read: res.read,
			uuid: res.uuid,
			link: res.link ?? null
		}
	} catch(e) {
		console.error(e)
		throw new APIError(`Failed to get article with id: ${id}`)
	}
}

export const setRead = async (id:string, read:boolean) => {
	return axios.patch(PUBLIC_API + `/articles/${id}`,{
		read:read
	})
}

export const deleteArticle = async (id:string) => {
	return axios.delete(PUBLIC_API + `/articles/${id}`)
}
