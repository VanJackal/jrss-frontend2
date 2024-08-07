<script lang="ts">
    import ArticlesEntry from "./ArticlesEntry.svelte";
	import type {Feed} from "$lib/api/Feed";
	import {selectedArticle} from "$lib/stores/articleStore";
	import type {Article} from "$lib/api/Article";
	import {ReadChanged} from "$lib/events/events";

	export let feed:Feed
    type Sorter = (a:Article,b:Article)=>number

    let sortType = sortDate
    let descending:boolean = true
    let sort = desc(sortDate)
    function setSort(sortFunc:Sorter) {
        if(sortType === sortFunc) {
            descending = !descending // swap the order if the user clicks the same sorter
        } else {
            descending = false
            sortType = sortFunc
        }
        sort = !descending? sortType : desc(sortType)
    }

	/**
     * handle a click on an article by setting it to read and
     * set the article as selected
	 * @param article article to act on
	 */
	const handleClick = (article:Article) => {
		$selectedArticle = article//select article
        if(!article.getRead()) {// set read
			console.log("Setting read")
			article.setRead(true).then(() => {
			    ReadChanged.notify()
			})
        }
    }

	// * Sorting Functions
	function sortDate(a:Article, b:Article):number {
		let dA = a.getDate()
        let dB = b.getDate()
        if (dA == dB) {
			return 0
        } else if (dA < dB) {
			return -1
        } else {
			return 1
        }
    }

	function sortTitle(a:Article, b:Article):number {
		return a.getTitle().localeCompare(b.getTitle())
    }

	function sortRead(a:Article, b:Article):number {
		let dA = a.getRead()
		let dB = b.getRead()
		if (dA == dB) {
			return 0
		} else if (dA) {
			return 1
		} else {
			return -1
		}
	}

	function desc(func:Function) {
		return (a:Article, b:Article) => {
			return func(a,b) * -1
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

    .container {
        height: 100%;

        overflow: scroll;
    }
</style>

<div class="container">
    <table>
        <thead>
        <tr>
            <th id="title" on:click={() => {setSort(sortTitle)}}>Title</th>
            <th id="read" on:click={() => {setSort(sortRead)}}>Read</th>
            <th id="date" on:click={() => {setSort(sortDate)}}>Date</th>
        </tr>
        </thead>

        <tbody>
        {#await feed.getArticles()}
            <p>Loading...</p>
        {:then articles}
            {#each articles.sort(sort) as article}
                <ArticlesEntry
                        on:click={() => {handleClick(article)}}
                        article={article}
                        selected={selectedArticle}
                />
            {/each}
        {/await}
        </tbody>
    </table>
</div>