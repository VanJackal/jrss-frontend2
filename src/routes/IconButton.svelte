<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    function handleClick(){
        dispatch("click",{})
    }
</script>
<style>
    .icon-container{
        background: var(--light-background);
        padding: 5px;
        aspect-ratio: 1/1;
        height: 1.5em;
        border-radius: 5px;
        margin: 0 2px;
    }
    .icon-container:hover {
        background:var(--lighter-background);
        cursor:pointer;
    }
</style>
<div class="icon-container" on:click={handleClick} role="button" tabindex=-1 on:keydown={handleClick}>
    <slot/>
</div>