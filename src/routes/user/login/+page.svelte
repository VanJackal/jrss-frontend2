<style>
    .heading {
        font-weight: bold;
        margin-bottom: 0.5em;
    }
</style>

<script>
    import {login} from "$lib/api/users.js"
    let username = "";
    let password = "";

    function onSubmit() {
        login(username,password).then(() => {
            alert("logged in")
        }).catch(() => {//TODO proper handler for this (should give some feedback)
            alert("login failed")
        })
    }
</script>
<div class="login">
    <div class="heading">Login</div>
    <div class="user-input">
        <label for="username">Username:</label>
        <input id="username" bind:value={username} />
    </div>
    <div class="user-input">
        <label for="password">Password:</label>
        <input id="password" bind:value={password}/>
    </div>
    <button on:click={onSubmit}>Log In</button>
</div>
