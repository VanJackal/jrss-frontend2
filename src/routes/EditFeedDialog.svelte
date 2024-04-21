<script lang="ts">
    import Modal from "$lib/components/Modal.svelte";
	import {createEventDispatcher} from "svelte";
	import {getFeed, updateFeed} from "$lib/api/feeds";

	export let showDialog:boolean
    export let selected:string

    let dialog:HTMLDialogElement
    let dispatch = createEventDispatcher()

    let url, title, shortTitle, description = "";
    $: getFeed(selected).then((feed) => {
		if (feed == null) return
		({url, title, shortTitle, description} = feed)
    })

    async function handleEdit(){
        await updateFeed(selected,{url, title, shortTitle, description})
        dispatch("feedEdited")
        dialog.close()
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

<Modal bind:dialog bind:showModal={showDialog} title="Edit Feed">
    <div class="container">
        {#if selected?.length > 0}
            <div class="input-container">
                <label for="url">Feed URL</label>
                <input id="url" bind:value={url}>
            </div>
            <div class="input-container">
                <label for="title">Feed Name</label>
                <input id="title" bind:value={title}>
            </div>
            <div class="input-container">
                <label for="tag">Short Name</label>
                <input id="tag" bind:value={shortTitle}>
            </div>
            <label for="desc">Description</label>
            <textarea id="desc" bind:value={description}/>
        {:else}
            <p>No feed selected</p>
        {/if}

        <button id="submit" on:click={handleEdit} disabled={false}>Submit</button>
        <button id="cancel" on:click={() => {dialog.close()}}>Cancel</button>
    </div>
</Modal>