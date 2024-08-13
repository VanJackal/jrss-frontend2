import type {Enclosure} from "$lib/api/articles";

/**
 * minimal feed details with unread count attached
 */
export type FeedsUnread = {
    id:string,
    title:string,
    unread:number
}
/**
 * Details required to create a feed
 */
export type FeedDetails = {
    url:string,
    title:string,
    shortTitle:string,
    description:string
}

/**
 * minimum details needed to get a feed from
 */
export type FeedProgenitor = Partial<FeedDetails> & {id:string}

/**
 * Basic article components
 */
export type ArticleEntry = {
    id:string,
    title:string,
    read:boolean,
    date:Date
}

/**
 * full article object
 */
export type FullArticle = ArticleEntry & {
    description:string,
    enclosure?:Enclosure,
    uuid:string,
    link?:string
}
