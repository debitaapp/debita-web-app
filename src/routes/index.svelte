<script>
	import Card from '../components/Card/Card.svelte';
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h2>Components Showcase</h2>
<h3>Card:</h3>
<figure>
	<Card>
		<p>This is a card component</p>
	</Card>
	<Card border={true}>
		<p>This is a card component with a border</p>
	</Card>
	<Card elevation={'01'}>
		<p>1 elevation</p>
	</Card>
	<Card elevation={'02'}>
		<p>2 elevation</p>
	</Card>
	<Card elevation={'03'}>
		<p>3 elevation</p>
	</Card>
	<Card elevation={'04'}>
		<p>4 elevation</p>
	</Card>
	<Card elevation={'06'}>
		<p>6 elevation</p>
	</Card>
	<Card elevation={'08'}>
		<p>8 elevation</p>
	</Card>
	<Card elevation={'12'}>
		<p>12 elevation</p>
	</Card>
	<Card elevation={'24'}>
		<p>24 elevation</p>
	</Card>
</figure>
