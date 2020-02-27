<script>
    export let placeholder = ''
    export let value = ''
    export let type = 'text'

    const handleInput = (event) => {
        value = event.target.value
    }
</script>

<input class="input" {type} {placeholder} on:input={handleInput}>
