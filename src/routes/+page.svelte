<script>
	import Card from "$lib/card.svelte"
	import "../app.css"
</script>

<svelte:head>
	<title>tourxcat</title>
</svelte:head>
<main class="font-sans m-auto w-full max-w-[1050px]">
	<h1>Hello</h1>
	<section class="my-[20px] grid grid-cols-2 gap-[20px] w-full">
		<Card
			title="Vacances a Malgrat de Mar, costa Brava"
			description="Recomenable pels que volen pasar unes vancances a la costa Brava sense gastar molts diners."
			image={`https://cdn.discordapp.com/attachments/1152239048220475516/1167127397859069952/malgrat.webp`}
		/>
		<Card
			title="Vacances a Malgrat de Mar, costa Brava"
			description="Recomenable pels que volen pasar unes vancances a la costa Brava sense gastar molts diners."
			image={`https://cdn.discordapp.com/attachments/1152239048220475516/1167127397859069952/malgrat.webp`}
		/>
	</section>
</main>
