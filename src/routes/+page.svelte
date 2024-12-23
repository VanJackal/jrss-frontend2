<style>
   #content {
       display:grid;
       grid-template-areas: "head head"
       "feeds list"
       "feeds article";
       grid-template-rows: 2em 2fr 3fr;
       grid-template-columns: 1fr 3fr;
       height:100%;
       width: 100%;
   }
   #header {
       grid-area: head;
   }
   #feeds {
       grid-area: feeds;
   }
   #articles-list {
       grid-area: list;
       width: 100%;
   }
   #article {
       grid-area: article;
   }
   #content div {
       min-width: 0;
       min-height: 0;
   }

</style>

<script lang="ts">
    import FeedsSidebar from "./FeedsSidebar.svelte";
    import Articles from "./Articles.svelte";
    import {type ArticleFactory, getArticles} from "$lib/api/feeds.js"
	import {feedId, selectedFeed} from "$lib/stores/feeds.js";
	import Article from "./Article.svelte";
	import {selectedArticle} from "$lib/stores/articleStore";

    let articleFactory:ArticleFactory;

	feedId.subscribe((id) => {
	    if(id && id.length > 0) {
			articleFactory = async () => {
			    return getArticles(id)
			}
        } else {
            articleFactory = async () => []
        }
	})

</script>


<div id="content">
    <div id="header">

    </div>
    <div id="feeds">
        <FeedsSidebar/>
    </div>
    <div id="articles-list">
        <Articles feed={$selectedFeed}/>
    </div>
    <div id="article">
        <Article article={$selectedArticle}/>
    </div>
</div>