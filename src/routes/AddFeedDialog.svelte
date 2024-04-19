<script lang="ts">
    import Modal from "$lib/components/Modal.svelte";
    import {addFeed, getFeedDetails, Feed} from "$lib/api/feeds"
    export let showDialog:boolean;

    let showAll:boolean = false;
    let feed:Feed = new Feed()

    async function handleSubmit() {
        if (showAll) {
            await feed.addFeed()
        } else {
            await feed.updateDetails()
            showAll = true;
        }
    }

    export function reset() {
        feed = new Feed()
        showAll = false;
    }
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }
    .input-container {
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    #desc {
        width: 400px;
        height: 200px;
    }
</style>

<Modal bind:showModal={showDialog} title="Add Feed">
    <div class="container">
        <div class="input-container">
            <label for="url">Feed URL</label>
            <input id="url" bind:value={feed.feedUrl}>
        </div>

        <!-- after get info -->
        {#if showAll}
            <div class="input-container">
                <label for="title">Feed Name</label>
                <input id="title" bind:value={feed.feedTitle}>
            </div>
            <div class="input-container">
                <label for="tag">Short Name</label>
                <input id="tag" bind:value={feed.feedShortTitle}>
            </div>
            <label for="desc">Description</label>
            <textarea id="desc" bind:value={feed.feedDescription}/>
        {/if}


        <button id="submit" on:click={handleSubmit}>Submit</button>
    </div>
</Modal>