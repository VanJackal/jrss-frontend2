<script lang="ts">
    import Modal from "$lib/components/Modal.svelte";
	import {addFeed, type Feed, getFeedDetails} from "$lib/api/feeds"
	import {createEventDispatcher} from "svelte";
    export let showDialog:boolean;

	//state members
	let dialog:HTMLDialogElement
    let showAll:boolean = false;
	let dispatch = createEventDispatcher()

	//data members
    let url:string= ""
	let title:string = ""
    let description:string = ""
    let shortTitle:string = ""


    async function handleSubmit() {
        if (showAll) {
            await addFeed({description: description, shortTitle: shortTitle, title: title, url:url})
            reset()
            dispatch('feedAdded')
        } else {
			const feed:Feed = await getFeedDetails(url);
			({url, title, description, shortTitle} = feed);
            showAll = true;
        }
    }

    export function reset() {
		url = ""
        showAll = false;
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

<Modal bind:dialog bind:showModal={showDialog} title="Add Feed">
    <div class="container">
        <div class="input-container">
            <label for="url">Feed URL</label>
            <input id="url" bind:value={url}>
        </div>

        <!-- after get info -->
        {#if showAll}
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
        {/if}


        <button id="submit" on:click={handleSubmit}>Submit</button>
    </div>
</Modal>