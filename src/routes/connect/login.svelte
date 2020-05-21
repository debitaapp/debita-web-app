<script>
  import Tailwindcss from '../../components/Tailwindcss.svelte'
  import Input from '../../components/input/Input.svelte'
  import Button from '../../components/button/Button.svelte'
  import TypographicLogo from '../../components/typographicLogo/TypographicLogo.svelte'

  let name
  let password
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
  <TypographicLogo />
  <p class="Welcome">¡Bievenido de nuevo! Inicia sesión</p>
  <Input bind:value={name} placeholder="Usuario" type="text" />
  <Input bind:value={password} placeholder="Contraseña" type="password" />
  <Button>Iniciar Sesión</Button>
</div>
