import {writable, type Writable} from "svelte/store";
import {Article} from "$lib/api/Article";

export const selectedArticle:Writable<Article> = writable()

