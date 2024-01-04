<style>
	.heading {
		font-weight: bold;
		margin-bottom: 0.5em;
	}
</style>

<script>
    import {register} from "$lib/api/users.js"
    let username = "";
    let password = "";

    function onSubmit() {
        register(username,password).then(() => {
            alert("registered")
        }).catch(() => {//TODO proper handler for this (should give some feedback)
            alert("registration failed")
        })
    }
</script>
<div class="login">
    <div class="heading">Register</div>
    <div class="user-input">
        <label for="username">Username:</label>
        <input id="username" bind:value={username} />
    </div>
    <div class="user-input">
        <label for="password">Password:</label>
        <input id="password" bind:value={password}/>
    </div>
    <button on:click={onSubmit}>Sign Up</button>
</div>
