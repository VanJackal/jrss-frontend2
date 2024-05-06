
<script lang="ts">

    import {Article} from "$lib/api/Article";

	export let article:Article;

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
    }
</style>

<tr>
    <td class="title"><div title={article.getTitle()} class="title-container">{article.getTitle()}</div></td>
    <td class="center">{article.getUnread()?"O":"X"}</td>
    <td class="center">{stringFromDate(article.getDate())}</td>
</tr>