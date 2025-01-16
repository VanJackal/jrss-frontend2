<script lang="ts">

    import FeedsList from "./FeedsList.svelte";
    import Folder from "./Folder.svelte"
    import {getContext} from "svelte";

    export let expand:boolean = false;
    export let feeds:any[];
    export let selectedFeed:any;
    export let handleClick:(id:string) =>void;
</script>
<style>
    .folder-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1px .3em;
    }
    .feeds-container {
        padding-left: 1em;
    }
</style>

<div class="folder">
    <div class="folder-header" on:click={() => expand = !expand} role="button" tabindex="0" on:keydown>
        <div class="title">
            {"Folder Name"}
        </div>
        <div class="folder-status">
            {expand?"-":"+"}
        </div>
    </div>
    <div class="feeds-container" hidden={!expand}>
        <FeedsList selectedFeed={selectedFeed} handleClick={handleClick} feeds={feeds} />
    </div>
</div>