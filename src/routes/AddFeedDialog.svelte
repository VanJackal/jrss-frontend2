<script lang="ts">
    import Modal from "$lib/components/Modal.svelte";
    export let showDialog:boolean;

    let showAll:boolean = true;
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
            <input id="url">
        </div>

        <!-- after get info -->
        {#if showAll}
            <div class="input-container">
                <label for="title">Feed Name</label>
                <input id="title">
            </div>
            <div class="input-container">
                <label for="tag">Short Name</label>
                <input id="tag">
            </div>
            <label for="desc">Description</label>
            <textarea id="desc"/>
        {/if}


        <button id="submit">Submit</button>
    </div>
</Modal>