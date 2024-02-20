<script>
    import {selected} from "$lib/stores/feeds.js";
    import {getFeeds} from "$lib/api/feeds.js";
    import FeedsHeader from "./FeedsHeader.svelte";

    let feeds = fetchFeeds()


    const handleClick = (id) => {
        return () => {
            selected.set(id);
        }
    }

    function fetchFeeds(){
        return (async () => {feeds = await getFeeds()})();
    }
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
    <FeedsHeader/>
    <div class="feeds-list">
        {#await feeds}
        {:then feeds}
            {#each feeds as feed}
                <div class="feed-item" class:selected={feed._id === $selected} on:click={handleClick(feed._id)}>
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