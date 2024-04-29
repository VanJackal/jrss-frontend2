<script lang="ts">
    import ArticlesEntry from "./ArticlesEntry.svelte";
	import type {ArticleFactory} from "$lib/api/feeds";
	export let articleFactory:ArticleFactory
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
    {#await articleFactory()}
        <p>Loading...</p>
    {:then articles}
        {#each articles as article}
            <ArticlesEntry articleEntry={article} />
        {/each}
    {/await}
    </tbody>
</table>