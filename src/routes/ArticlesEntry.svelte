
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
    .title {
        position: relative;
    }
    .title:before{
        content: '&nbsp;';
        visibility: hidden;
    }
    .title-container {
        text-overflow: ellipsis;
        overflow: hidden;
        height: 1.5em;
        max-width: 100%;
        white-space: nowrap;

        position: absolute;
        left: 0;
        right: 0;
    }
    tr {
        width: 100%;
    }
</style>

<tr>
    <td class="title"><div class="title-container">{articleEntry.title}</div></td>
    <td class="center">{articleEntry.unread?"O":"X"}</td>
    <td class="center">{stringFromDate(articleEntry.date)}</td>
</tr>