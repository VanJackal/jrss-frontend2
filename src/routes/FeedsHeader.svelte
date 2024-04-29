<script lang="ts">
    import RefreshCw from "lucide-svelte/icons/refresh-cw";
    import PlusSquare from "lucide-svelte/icons/plus-square";
    import Trash2 from "lucide-svelte/icons/trash-2";
    import IconButton from "./IconButton.svelte";

    import AddFeedDialog from "./AddFeedDialog.svelte";
	import RemoveFeedDialog from "./RemoveFeedDialog.svelte";
	import {Pencil} from "lucide-svelte";
	import EditFeedDialog from "./EditFeedDialog.svelte";
	import {feedId} from "$lib/stores/feeds";

	//todo switch this to an enum maybe
    let showAddFeed:boolean = false;
	let showRemoveFeed:boolean = false;
	let showEditFeed:boolean = false;

    let refreshFeeds:Function;
    export {refreshFeeds}
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
    <IconButton on:click={refreshFeeds}>
        <RefreshCw />
    </IconButton>
    <!-- Add Feed -->
    <IconButton on:click={() => showAddFeed = true}>
        <PlusSquare />
    </IconButton>
    <!-- Delete Feed -->
    <IconButton on:click={() => showRemoveFeed = true}>
        <Trash2 />
    </IconButton>
    <!-- Edit Feed -->
    <IconButton on:click={() => showEditFeed = true}>
        <Pencil />
    </IconButton>
</div>

<AddFeedDialog on:feedAdded={refreshFeeds} bind:showDialog={showAddFeed}/>
<RemoveFeedDialog on:feedRemoved={refreshFeeds} bind:showDialog={showRemoveFeed}/>
<EditFeedDialog on:feedEdited={refreshFeeds} bind:showDialog={showEditFeed} selected={$feedId}/>
