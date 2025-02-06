export type FeedPayload = {
    _id: string,
    title: string,
    shortTitle: string,
    description: string,
    link: string,
    userid: string,
    folderid: string
}

export type FeedUnreadPayload = {
    _id: string,
    title: string,
    folderid: string,
    unread:number
}

export type ArticlePayload = {
    _id: string,
    title: string,
    description: string,
    pubDate: string,
    link: string,
    enclosure: string,
    content: string,
    uuid: string,
    read: true,
    userid: string,
    feedid: string
}

export type LoginPayload = {
    username:string,
    password:string
}

export type RegisterPayload = {
    username:string,
    password:string
}

export type FolderPayload = {
    _id: string,
    name: string,
    shortName: string,
    parent: string
}