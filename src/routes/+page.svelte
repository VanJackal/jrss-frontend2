<style>
   #content {
       display:grid;
       grid-template-areas: "head head"
       "feeds list"
       "feeds article";
       grid-template-rows: 2em 1fr 1fr;
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

</style>

<script>
    import Feeds from "./Feeds.svelte";
    import Articles from "./Articles.svelte";
</script>


<div id="content">
    <div id="header">

    </div>
    <div id="feeds">
        <Feeds/>
    </div>
    <div id="articles-list">
        <Articles/>
    </div>
    <div id="article">

    </div>
</div>