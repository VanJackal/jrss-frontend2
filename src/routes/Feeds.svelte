<script lang="ts">
    import {feedId} from "$lib/stores/feeds.js";
	import {getFeeds, updateFeeds} from "$lib/api/feeds.js";
    import FeedsHeader from "./FeedsHeader.svelte";
	import {ReadChanged} from "$lib/events/events";

    let feeds: Promise<any[]>;


    const handleClick = (id:string) => {
        return () => {
            feedId.set(id);
        }
    }

    function fetchFeeds(){
		updateFeeds()
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
</style>

<div class="feeds">
    <FeedsHeader refreshFeeds={fetchFeeds}/>
    <div class="feeds-list">
        {#await feeds}
        {:then feeds}
            {#each feeds as feed}
                <div class="feed-item" class:selected={feed._id === $feedId} on:click={handleClick(feed._id)}>
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