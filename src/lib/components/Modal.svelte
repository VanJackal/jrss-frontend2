<script lang="ts">
    export let showModal:boolean;
    export let title:string = "";

    export let dialog:HTMLDialogElement;
    $: if (dialog && showModal) dialog.showModal();
</script>

<style>
    dialog{

        position: absolute;
        border:none;
        background: none;
    }
    dialog::backdrop {
        background: rgba(0,0,0,0.3);
    }

    .title {
        border-bottom: 1px var(--light-background) solid;
        width: 100%;
        margin: 0 0 0.5em;
    }

    .inner {
        background: var(--background);
        color: var(--text);
        padding: 1em;
        border-radius: 5px;
    }
</style>



<dialog class="container"
        bind:this={dialog}
        on:close={() => (showModal = false)}
        on:click|self={() => dialog.close()}>
    <div class="inner" on:click|stopPropagation>
        {#if title}
            <h2 class="title">
                {title}
            </h2>
        {/if}
        <slot/>
    </div>
</dialog>