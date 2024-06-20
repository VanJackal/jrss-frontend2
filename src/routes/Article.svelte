<script lang="ts">
    import {Article} from "$lib/api/Article";
	import Loading from "$lib/components/Loading.svelte";
	import sanitizeHtml from 'sanitize-html'
	import Enclosure from "./Enclosure.svelte";

    export let article:Article

    const sanitize = (html:string) => {
        return sanitizeHtml(html,{
			allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
        })
    }
</script>

<style>
    a {
        color: inherit;
        text-decoration: inherit;
    }
    a:hover {
        text-decoration: underline solid var(--lighter-background);
    }
    .container {
        border-top: var(--lighter-background) 1px solid;
        height:100%;
        max-height: inherit;
        display: flex;
        flex-direction: column;
    }
    .content {
        overflow: scroll;
        flex-grow: 1;
        padding-bottom: 1em;
    }
    .header {
        margin-bottom: 2px;
    }
    .title {
        margin: 0.5em 0 0 0;
    }
    .date {
        font-size: small;
        font-style: italic;
        color: var(--light-background)
    }
</style>

{#if article != null}
    <div class="container">
        <div class="header">
            <h2 class="title">
                {#await article.getLink()}
                    <span>{article.getTitle()}</span>
                {:then link}
                    <a href={link??""}>{article.getTitle()}</a>
                {/await}
            </h2>
            <div class="date">Posted: {article.getDate().toDateString()}</div>
        </div>

        <div class="content">
            {#await article.getEnclosure()}
                <Loading/>
            {:then enclosure}
                {#if enclosure != null}
                    <Enclosure enclosure={enclosure}/>
                {/if}
            {/await}
            {#await article.getDescription()}
                <Loading/>
            {:then desc}
                {@html sanitize(desc)}
            {/await}
        </div>
    </div>
{/if}