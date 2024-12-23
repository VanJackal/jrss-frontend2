<script lang="ts">
    import {feedId} from "$lib/stores/feeds.js";
	import {getFeeds, updateFeeds} from "$lib/api/feeds.js";
    import FeedsHeader from "./FeedsHeader.svelte";
	import {ReadChanged} from "$lib/events/events";
    import Loading from "$lib/components/Loading.svelte";

    let feeds: Promise<any[]> = getFeeds();


    const handleClick = (id:string) => {
        return () => {
            feedId.set(id);
        }
    }

    async function fetchFeeds(){
		await updateFeeds()
        updateFeedsState()
    }

	function updateFeedsState() {
		feeds = getFeeds()
    }

	ReadChanged.subscribe(updateFeedsState)

    fetchFeeds()
</script>

<style>
    .feed-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1px .3em;
    }

    .feed-item:hover,.feed-item.selected{
        background: var(--light-background);
        cursor: pointer;
    }
    .unread {
        color: var(--accent)
    }
    .feeds-list {
        overflow: auto;
    }
    .feeds {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>

<div class="feeds">
    <FeedsHeader refreshFeeds={fetchFeeds}/>
    <div class="feeds-list">
        {#await feeds}
            <Loading/>
        {:then feeds}
            {#each feeds as feed}
                <div class="feed-item" class:selected={feed._id === $feedId} on:keyup on:click={handleClick(feed._id)} role="button" tabindex=0>
                    <div class="title">
                        {feed.title}
                    </div>
                    <div class="unread" >
                        {feed.unread}
                    </div>
                </div>
            {/each}
        {/await}
    </div>
</div>