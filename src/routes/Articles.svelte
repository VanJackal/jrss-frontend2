<script>
    import ArticlesEntry from "./ArticlesEntry.svelte";
</script>

<style>
    #title {
        width: 75%;
        text-align:left;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    thead tr {
        border-bottom: 3px solid var(--lighter-background);
    }
    tbody {
        width: 100%;
    }
</style>

<table>
    <thead>
    <tr>
        <th id="title">Title</th>
        <th id="read">Read</th>
        <th id="date">Date</th>
    </tr>
    </thead>
    <tbody>
        <ArticlesEntry articleEntry={{title:"Test, warning this is a test, cease panic this is not real, do not avert thine eyes from this divine test",unread:true,date:new Date()}} />
        <ArticlesEntry articleEntry={{title:"Test, warning this is a test, cease panic this is not real, do not avert thine eyes from this divine test",unread:true,date:new Date()}} />
    </tbody>
</table>