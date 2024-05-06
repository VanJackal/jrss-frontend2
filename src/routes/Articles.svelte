<script lang="ts">
    import ArticlesEntry from "./ArticlesEntry.svelte";
	import type {Feed} from "$lib/api/Feed";
	import {selectedArticle} from "$lib/stores/articleStore";
	import type {Article} from "$lib/api/Article";

	export let feed:Feed

	/**
     * handle a click on an article by setting it to read and
     * set the article as selected
	 * @param article article to act on
	 */
	const handleClick = (article:Article) => {
		$selectedArticle = article//select article
        if(!article.getRead()) {// set read
			console.log("Setting read")
			article.setRead(true)
        }
    }
</script>

<style>
    #title {
        width: 75%;
        text-align:left;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    thead tr {
        border-bottom: 3px solid var(--lighter-background);
    }
    tbody {
        width: 100%;
    }
</style>

<table>
    <thead>
    <tr>
        <th id="title">Title</th>
        <th id="read">Read</th>
        <th id="date">Date</th>
    </tr>
    </thead>

    <tbody>
    {#await feed.getArticles()}
        <p>Loading...</p>
    {:then articles}
        {#each articles as article}
            <ArticlesEntry
                    on:click={() => {handleClick(article)}}
                    article={article}
                    selected={article.getID() === $selectedArticle?.getID()}
            />
        {/each}
    {/await}
    </tbody>
</table>