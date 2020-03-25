<script>
  export let border
  export let elevation
</script>

<style>
  .card {
    font-weight: 300;
    padding: 0 1em;
  }

  .border {
    border: 1px solid rgba(32, 32, 32, 0.1);
  }
  .dp01 {
    background-color: hsla(0, 100%, 100%, 0.05);
    box-shadow:
			/* offset-x | offset-y | blur-radius | spread-radius | color */ 0px
        1px 1px 0px hsla(0, 0%, 0%, 0.14),
      0px 2px 1px -1px hsla(0, 0%, 0%, 0.12),
      0px 1px 3px 0px hsla(0, 0%, 0%, 0.2);
  }

  .dp02 {
    background-color: hsla(0, 100%, 100%, 0.07);
    box-shadow:
		/* offset-x | offset-y | blur-radius | spread-radius | color */ 0px
        2px 2px 0px hsla(0, 0%, 0%, 0.14),
      0px 3px 1px -2px hsla(0, 0%, 0%, 0.12),
      0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);
  }

  .dp03 {
    background-color: hsla(0, 100%, 100%, 0.08);
    box-shadow:
			/* offset-x | offset-y | blur-radius | spread-radius | color */ 0px
        3px 4px 0px hsla(0, 0%, 0%, 0.14),
      0px 3px 3px -2px hsla(0, 0%, 0%, 0.12),
      0px 1px 8px 0px hsla(0, 0%, 0%, 0.2);
  }

  .dp04 {
    background-color: hsla(0, 100%, 100%, 0.09);
    box-shadow:
			/* offset-x | offset-y | blur-radius | spread-radius | color */ 0px
        4px 5px 0px hsla(0, 0%, 0%, 0.14),
      0px 1px 10px 0px hsla(0, 0%, 0%, 0.12),
      0px 2px 4px -1px hsla(0, 0%, 0%, 0.2);
  }

  .dp06 {
    background-color: hsla(0, 100%, 100%, 0.11);
    box-shadow:
			/* offset-x | offset-y | blur-radius | spread-radius | color */ 0px
        6px 10px 0px hsla(0, 0%, 0%, 0.14),
      0px 1px 18px 0px hsla(0, 0%, 0%, 0.12),
      0px 3px 5px -1px hsla(0, 0%, 0%, 0.2);
  }

  .dp08 {
    background-color: hsla(0, 100%, 100%, 0.12);
    box-shadow:
			/* offset-x | offset-y | blur-radius | spread-radius | color */ 0px
        8px 10px 1px hsla(0, 0%, 0%, 0.14),
      0px 3px 14px 2px hsla(0, 0%, 0%, 0.12),
      0px 5px 5px -3px hsla(0, 0%, 0%, 0.2);
  }

  .dp12 {
    background-color: hsla(0, 100%, 100%, 0.14);
    box-shadow:
			/* offset-x | offset-y | blur-radius | spread-radius | color */ 0px
        12px 17px 2px hsla(0, 0%, 0%, 0.14),
      0px 5px 22px 4px hsla(0, 0%, 0%, 0.12),
      0px 7px 8px -4px hsla(0, 0%, 0%, 0.2);
  }

  .dp16 {
    background-color: hsla(0, 100%, 100%, 0.15);
    box-shadow:
			/* offset-x | offset-y | blur-radius | spread-radius | color */ 0px
        16px 24px 2px hsla(0, 0%, 0%, 0.14),
      0px 6px 30px 5px hsla(0, 0%, 0%, 0.12),
      0px 8px 10px -5px hsla(0, 0%, 0%, 0.2);
  }

  .dp24 {
    background-color: hsla(0, 100%, 100%, 0.16);
    box-shadow:
			/* offset-x | offset-y | blur-radius | spread-radius | color */ 0px
        24px 38px 3px hsla(0, 0%, 0%, 0.14),
      0px 9px 46px 8px hsla(0, 0%, 0%, 0.12),
      0px 11px 15px -7px hsla(0, 0%, 0%, 0.2);
  }
</style>

<div class="card {elevation ? 'dp' + elevation : ''}" class:border>
  <slot />
</div>
