<script>
    import Tailwindcss from '../../components/Tailwindcss.svelte'
	import { Auth } from 'aws-amplify'
	import Input from '../../components/input/Input.svelte'
	import Button from '../../components/button/Button.svelte'
	import TypographicLogo from '../../components/typographicLogo/TypographicLogo.svelte'


	let username
	let password

    async function signUp() {
		const result = await Auth.signUp({
			username,
			password,
		})
		console.log(result)
    }
</script>

<style>
	.Welcome {
		font-size: 1rem;
		text-align: center;
		margin-bottom: 3em;
		margin-top: 1.2em;
	}
    .login-panel {
        @apply grid grid-cols-1;
    }
</style>

<Tailwindcss />

<div class="login-panel">
	<TypographicLogo/>
	<p class="Welcome">¡Bievenido!</p>
	<Input
		bind:value={username}
		placeholder="Usuario"
		type="text"/>
	<Input
		bind:value={password}
		placeholder="Contraseña"
		type="password"/>
	<Button on:click={signUp}>Registrarse</Button>
	<button on:click={signUp}>Registrarse</button>
</div>

