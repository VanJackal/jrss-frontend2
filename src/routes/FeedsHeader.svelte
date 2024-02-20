<script>
    import RefreshCw from "lucide-svelte/icons/refresh-cw";
    import PlusSquare from "lucide-svelte/icons/plus-square";
    import Trash2 from "lucide-svelte/icons/trash-2";
    import IconButton from "./IconButton.svelte";

    function handleRefreshButton() {
        console.log("Test")
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
    <IconButton on:click={handleRefreshButton}>
        <RefreshCw />
    </IconButton>
    <IconButton>
        <PlusSquare />
    </IconButton>
    <IconButton>
        <Trash2 />
    </IconButton>
</div>

