<script>
  import Fa from "svelte-fa";
  import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

  import Tailwindcss from "../../components/Tailwindcss.svelte";
  import Input from "../../components/input/Input.svelte";
  import Button from "../../components/button/Button.svelte";
  import Card from "../../components/card/Card.svelte";
  import TypographicLogo from "../../components/typographicLogo/TypographicLogo.svelte";
  import LogoBackground from "../../components/logoBackground/logoBackground.svelte";

  let name;
  let password;
</script>

<style>
  .main {
    @apply flex flex-col justify-center;
  }
  .wrapper {
    @apply pt-48;
  }
  .icon-wrapper {
    @apply mr-8;
  }
  ul {
    list-style: none; /* Remove default bullets */
  }
  ul li::before {
    content: "\2022";
    @apply text-debita-green-100;
    @apply font-bold;
    @apply inline-block;
    @apply w-4;
  }
</style>

<Tailwindcss />
<LogoBackground />
<div class="wrapper">
  <Card>
    <div class="main">
      <TypographicLogo />
      <p class="text-base text-center mt-5 mb-12">Conectar con Alexa</p>
      <div class="mb-6">
        Al escoger
        <strong class="font-bold">Acepto</strong>
        , le darás permiso a la habilidad
        <strong class="font-bold">Débita</strong>
        para hacer lo siguiente:
        <ul class="list-disc list-inside">
          <li>Accesar a tu cuenta de Débita</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>

      <Button type="primary">Aceptar</Button>
      <Button type="outline">Rechazar</Button>
    </div>
  </Card>
</div>
