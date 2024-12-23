<script lang="ts">
    import {feedId} from "$lib/stores/feeds.js";
	import {getFeeds, updateFeeds} from "$lib/api/feeds.js";
    import FeedsHeader from "./FeedsHeader.svelte";
	import {ReadChanged} from "$lib/events/events";
    import Loading from "$lib/components/Loading.svelte";
    import FeedsList from "./FeedsList.svelte";

    let feeds: Promise<any[]> = getFeeds();


    const handleClick = (id:string) => {
        feedId.set(id);
    }

    async function fetchFeeds(){
		await updateFeeds()
        updateFeedsState()
    }

	function updateFeedsState() {
		feeds = getFeeds()
    }

	ReadChanged.subscribe(updateFeedsState)

    fetchFeeds()
</script>

<style>
    .feeds {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>

<div class="feeds">
    <FeedsHeader refreshFeeds={fetchFeeds}/>
    {#await feeds}
        <Loading/>
    {:then feeds}
        <FeedsList feeds={feeds} selectedFeed={feedId} handleClick={handleClick}/>
    {/await}
</div>