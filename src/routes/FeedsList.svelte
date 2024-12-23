<script lang="ts">
    export let feeds:any[];
    export let selectedFeed:any;
    export let handleClick:(id:string) =>void;
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
</style>

<div class="feeds-list">
    {#each feeds as feed}
        <div class="feed-item" class:selected={feed._id === $selectedFeed} on:keyup on:click={() => handleClick(feed._id)} role="button" tabindex=0>
            <div class="title">
                {feed.title}
            </div>
            <div class="unread" >
                {feed.unread}
            </div>
        </div>
    {/each}
</div>
