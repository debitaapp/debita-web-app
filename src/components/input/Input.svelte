<script>
  import Tailwindcss from '../Tailwindcss.svelte'

  export let placeholder = ''
  export let value = ''
  export let type = 'text'

  const handleInput = event => {
    value = event.target.value
  }
</script>

<style>
  .Input {
    @apply bg-debita-gray-100 text-debita-gray-200 text-base;
    @apply border border-gray-100 py-3 px-4;
    @apply block w-full appearance-none leading-normal;
    margin-bottom: 1em;
    border-radius: 0.7rem;
  }

  .Input:focus {
    @apply outline-none;
    @apply shadow-outline-debita;
  }
</style>

<Tailwindcss />

<input class="Input" {type} {placeholder} on:input={handleInput} />
