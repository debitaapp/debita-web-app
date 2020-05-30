<script>
</script>

<style>
    .logoBackground {
        width: 100%;
        height: 100vh;
        /* background-color: aqua; */
        position: fixed;
        top: 0;
        left: 0;
        z-index: -10;
    }
    .D {
        @apply font-display text-debita-green-200 font-black text-backgroundDs;
    }
    .D1 {
        position: fixed;
        top: -150px;
        left: -100px;
    }
    .D2 {
        position: fixed;
        bottom: -250px;
        right: -110px;
        transform: rotate(180deg);
    }
</style>

<div class="logoBackground">
    <p class="D D1">D</p>
    <p class="D D2">D</p>
</div>