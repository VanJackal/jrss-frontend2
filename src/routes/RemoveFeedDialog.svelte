<script lang="ts">
    import Modal from "$lib/components/Modal.svelte"
	import {createEventDispatcher} from "svelte";
	import {feedId} from "$lib/stores/feeds";
	import {type FeedDetails, getFeed, removeFeed} from "$lib/api/feeds";

	export let showDialog:boolean

    let dialog:HTMLDialogElement
    let dispatch = createEventDispatcher()

    let feed:FeedDetails|null;

	feedId.subscribe(async (id:string) => {
		if(id?.length > 0) {
			feed = await getFeed(id);
        } else {
			feed = null
        }
    })

    const handleDelete = async () => {
        await removeFeed($feedId)
        feedId.set("")
        dispatch("feedRemoved")
        dialog.close()
    }
</script>

<Modal bind:dialog bind:showModal={showDialog} title="Remove Feed">
    <div class="container">
        {#if feedId && feed !== null}
            <p>Are you sure you want to remove: "{feed.title}"</p>
            <button on:click={() => {handleDelete()}}>Delete</button>
            <button on:click={() => dialog.close()}>Cancel</button>
        {:else}
            <p>No feed selected.</p>
            <button on:click={() => dialog.close()}>Close</button>
        {/if}
    </div>
</Modal>