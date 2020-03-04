<script>
    import Tailwindcss from '../Tailwindcss.svelte'
    export let type = ''
</script>

<style>
    .Button {
        @apply text-base bg-debita-green-100;
        @apply  text-white font-bold py-4 px-4 rounded-full;
        font-family: 'Muli';
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .Button:hover {
        @apply bg-debita-green-200;
    }
</style>

<Tailwindcss />

<button class="Button" {type}><slot></slot></button>
