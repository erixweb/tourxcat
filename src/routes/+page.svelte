<script>
	import Card from "$lib/card.svelte"
	import "../app.css"
	import "../index"
</script>

<svelte:head>
	<title>tourxcat</title>
</svelte:head>
<header class="flex justify-center items-center font-sans m-auto w-full max-w-[1050px] min-h-[100vh] relative mb-[40px] px-[20px]">
	<h1 class="text-[50px] font-bold">
		No et perdis en les vacances
	</h1>
	<a href="#llocs" id="finger-down" class="absolute bottom-10 text-[40px]">
		👇
	</a>
</header>
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
