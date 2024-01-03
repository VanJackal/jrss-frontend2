<style>
    .background {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    .container {
        background-color: beige;
        padding: 2em;
        border-radius: 10px;
        filter: drop-shadow(10px 5px 2px gray);
    }
</style>


<div class="background">
    <div class="container">
        <slot/>
    </div>
</div>