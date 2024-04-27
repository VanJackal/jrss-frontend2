
<script lang="ts">
    import type {ArticleEntry} from "$lib/api/feeds";

    export let articleEntry:ArticleEntry;

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
    <td class="title"><div title={articleEntry.title} class="title-container">{articleEntry.title}</div></td>
    <td class="center">{articleEntry.unread?"O":"X"}</td>
    <td class="center">{stringFromDate(articleEntry.date)}</td>
</tr>