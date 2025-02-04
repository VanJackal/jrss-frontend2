export const FeedsRoutes = {
    feeds(){
        return "/feeds"
    },
    feed(id:string){
        return `/feeds/${id}`
    },
    feedArticles(id:string){
        return `/feeds/${id}/articles`
    }
}