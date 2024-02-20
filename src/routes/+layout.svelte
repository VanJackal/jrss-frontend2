<style>
    :global(:root) {
        --background: #222831;
        --light-background: #393e46;
        --lighter-background: #40454d;
        --dark-background: #1d242d;
        --text: #f2f2f2;
        --accent: #f96d00;
    }
    :global(body){
		margin:0;
		height:100vh;
		width: 100vw;

        background: var(--background);
        color: var(--text);
        font-family: sans-serif;
    }
</style>

<slot/>