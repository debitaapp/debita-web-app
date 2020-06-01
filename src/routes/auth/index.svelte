<script>
    import Fa from 'svelte-fa'
    import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'

    import Tailwindcss from '../../components/Tailwindcss.svelte'
	import Input from '../../components/input/Input.svelte'
	import Button from '../../components/button/Button.svelte';
	import Card from '../../components/card/Card.svelte';
	import TypographicLogo from '../../components/typographicLogo/TypographicLogo.svelte';
	import LogoBackground from '../../components/logoBackground/logoBackground.svelte';

	let name
	let password
</script>

<style>
	.Welcome {
        @apply text-base text-center mt-5 mb-12;
	}
    .main {
        @apply flex flex-col justify-center
    }
    .wrapper {
        @apply pt-48
    }
    .icon-wrapper {
        @apply mr-8
    }
    .button-text {
        @apply text-gray-600
    }
</style>

<Tailwindcss />
<LogoBackground/>
<div class="wrapper">
    <Card>
        <div class="main">
            <TypographicLogo/>
	        <p class="Welcome">¡Bievenido de nuevo!! Inicia sesión </p>
            <Button><div class='icon-wrapper'><Fa icon={faFacebookF} color='#3b5998' fw/></div><p class="button-text">Iniciar sesión con Facebook</p></Button>
            <Button><div class='icon-wrapper'><Fa icon={faGoogle} color='#de5246' fw/></div><p class="button-text">Iniciar sesión con Google</p></Button>
        </div>
    </Card>
</div>

