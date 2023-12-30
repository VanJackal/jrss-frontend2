<style>
   #content {
       display:grid;
       grid-template-areas: "head head"
       "feeds list"
       "feeds article";
       grid-template-rows: 2em 1fr 1fr;
       grid-template-columns: 1fr 3fr;
       height:100vh;
       width: 100vw;
   }
   #header {
       grid-area: head;
   }
   #feeds {
       grid-area: feeds;
   }
   #articles-list {
       grid-area: list;
   }
   #article {
       grid-area: article;
   }

</style>

<script>
    import * as api from "$lib/api/index" //Shouldn't need `index` here not sure why webstorm is complaining about it
</script>


<div id="content">
    <div id="header">

    </div>
    <div id="feeds">

    </div>
    <div id="articles-list">

    </div>
    <div id="article">

    </div>
</div>