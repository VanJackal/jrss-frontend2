import {writable, derived} from "svelte/store";
import {Feed, NullFeed} from "$lib/api/Feed";

export const feedId = writable("")

export const selectedFeed = derived(
    feedId,
    ($feedId, set) => {
        Feed.fetchFeed($feedId).then((feed) => {
            set(feed)
        })
    },
    new NullFeed()
)