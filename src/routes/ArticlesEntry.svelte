
<script lang="ts">

    import {Article} from "$lib/api/Article";
    import {type Writable} from "svelte/store";
	import {ReadChanged} from "$lib/events/events";

    export let article:Article;
    export let selected:Writable<Article>;

	let read:boolean;

    //setup for auto unsub
    let cb:any = null; // callback currently subscribing to read changes
    let prevArticle:Article;

    $: {
        if (cb != null) {
            prevArticle.getReadState().unsubscribe(cb)
        }
        cb = article.getReadState().subscribe((isRead)=>{read = isRead})//update ui when according to the read state
        prevArticle = article;
        read = article.getRead()
        console.debug("updated article subscribers")
    }

    function padNum(num:number):string {
        return num.toString().padStart(2,"0")
    }
    const stringFromDate = (date:Date) => {
        return `${padNum(date.getFullYear())}/${padNum(date.getMonth() + 1)}/${padNum(date.getDate())}`;
    }

	function onReadClick() {
		article.setRead(!article.getRead()).then(() => {
		    ReadChanged.notify()
		})
    }

</script>

<style>
    .center{
        text-align: center;
    }
    .title-container {
        text-overflow: ellipsis;
        overflow: hidden;
        height: 1.5em;
        max-width: 100%;
        white-space: nowrap;

        position: absolute;
        border: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .title {
        position:relative;
        width: 100%;
    }

    .date {
        padding-right: 0.5em;
    }
    .title-container {
        padding-left: 0.2em;
    }
    tr {
        width: 100%;
        border-bottom: var(--lighter-background) 1px solid;
    }
    tr:hover, tr.selected {
        background: var(--light-background)
    }

    tr:hover {
        cursor:pointer
    }
</style>

<tr on:click class:selected = {$selected?.getID() === article.getID()}>
    <td class="title"><div title={article.getTitle()} class="title-container">{article.getTitle()}</div></td>
    <td class="center" on:click|stopPropagation={() => {onReadClick()}}>{read?"X":"O"}</td>
    <td class="center date">{stringFromDate(article.getDate())}</td>
</tr>