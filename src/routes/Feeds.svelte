<script>
    import {selected} from "$lib/stores/feeds.js";
    let feeds = [
        {
            title:"test",
            unread:10,
            _id:"1"
        },
        {
            title:"test",
            unread:10,
            _id:"2"
        },
        {
            title:"test",
            unread:10,
            _id:"3"
        },
        {
            title:"test",
            unread:10,
            _id:"4"
        },
        {
            title:"test",
            unread:10,
            _id:"5"
        },
    ]

    const handleClick = (id) => {
        return () => {
            selected.set(id);
        }
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
</div>