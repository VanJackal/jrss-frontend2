<script lang="ts">
    import ArticlesEntry from "./ArticlesEntry.svelte";
	import type {Feed} from "$lib/api/Feed";
	import {selectedArticle} from "$lib/stores/articleStore";

	export let feed:Feed
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
                    on:click={() => {$selectedArticle = article}}
                    article={article}
                    selected={article.getID() === $selectedArticle?.getID()}
            />
        {/each}
    {/await}
    </tbody>
</table>