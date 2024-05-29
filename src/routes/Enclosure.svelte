<script lang="ts">
    import {type Enclosure} from "$lib/api/articles";
    export let enclosure:Enclosure
    let type = (enclosure.type ?? "NONE").split("/")[0].toLowerCase()


</script>
<style>
    .enclosure {
        padding: 1em;
    }
    audio {
        width: 100%;
    }
</style>

<div class="enclosure">
    {#if type === "audio"}
        <audio controls>
            <source src={enclosure.url} type={enclosure.type}>
            Your browser does not support audio elements
        </audio>

    {:else}
        <em>Unsupported enclosure type: '{enclosure.type}'</em>
    {/if}

</div>