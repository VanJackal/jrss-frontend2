
<script lang="ts">

    import {Article} from "$lib/api/Article";

	export let article:Article;
	export let selected:boolean;

    const stringFromDate = (date:Date) => {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
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

<tr on:click class:selected = {selected}>
    <td class="title"><div title={article.getTitle()} class="title-container">{article.getTitle()}</div></td>
    <td class="center">{article.getUnread()?"O":"X"}</td>
    <td class="center">{stringFromDate(article.getDate())}</td>
</tr>