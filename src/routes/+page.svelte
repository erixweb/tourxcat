<script>
	import Card from "$lib/card.svelte"
	import HomeHeader from "$lib/home-header.svelte"
	import Nav from "$lib/nav.svelte"
	import "../app.css"
	import "../index"
</script>

<svelte:head>
	<title>tourxcat</title>
</svelte:head>
<Nav />
<HomeHeader />
<main class="font-sans m-auto w-full max-w-[1050px]">
	<section class="my-[20px] grid grid-cols-2 gap-[20px] w-full" id="llocs">
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
