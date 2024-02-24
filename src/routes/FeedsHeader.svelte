<script lang="ts">
    import RefreshCw from "lucide-svelte/icons/refresh-cw";
    import PlusSquare from "lucide-svelte/icons/plus-square";
    import Trash2 from "lucide-svelte/icons/trash-2";
    import IconButton from "./IconButton.svelte";

    import {updateFeeds} from "$lib/api/feeds.js";
    import AddFeedDialog from "./AddFeedDialog.svelte";

    let showAddFeed:boolean = false;
    let fetchFeeds:Function;
    export {fetchFeeds}

    async function handleRefreshButton() {
        await updateFeeds()
        await fetchFeeds();
    }
</script>
<style>
    .feeds-header {
        height: 2.5em;
        background: var(--dark-background);
        display:flex;
        align-items: center;
        flex-direction: row;
    }
</style>
<div class="feeds-header">
    <!-- Refresh Button -->
    <IconButton on:click={handleRefreshButton}>
        <RefreshCw />
    </IconButton>
    <!-- Add Feed -->
    <IconButton on:click={() => showAddFeed = true}>
        <PlusSquare />
    </IconButton>
    <!-- Delete Feed -->
    <IconButton>
        <Trash2 />
    </IconButton>
</div>

<AddFeedDialog bind:showDialog={showAddFeed}/>
