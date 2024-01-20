<script>
	import Card from "$lib/card.svelte"
	import HomeHeader from "$lib/home-header.svelte"
	import Map from "$lib/icons/map.svelte"
	import Nav from "$lib/nav.svelte"
	import "../app.css"
	import "../index"
</script>

<svelte:head>
	<title>tourxcat</title>
</svelte:head>
<Nav />
<HomeHeader />
<main class=" m-auto w-full max-w-[1070px] px-[20px]">
	<section class="my-[20px] w-full" id="llocs">
		<h2 class="py-[20px] text-[35px] font-bold">
			<span class=" text-cyan-600">Llocs</span> per visitar
		</h2>
		<div class="w-full max-w-[250px] flex items-center mb-[20px] text-slate-300">
			<hr class="w-full border-t-slate-400" />
			<div class=""><Map /></div>
			<hr class="w-full border-t-slate-400" />
		</div>
		<div class="grid grid-cols-3 gap-[20px] w-full items-start place-items-start">
			<Card
				title="Vacances a Malgrat de Mar, costa Brava"
				description="Recomenable pels que volen pasar unes vancances a la costa Brava sense gastar molts diners."
				image={`https://cdn.discordapp.com/attachments/1152239048220475516/1167127397859069952/malgrat.webp`}
				region="Maresme"
			/>
			<Card

				title="A fer compres a Badalona"
				description="Si vius a prop de Barcelona, visita Badalona. Una ciutat amb una gran costa, muntanyes i l'edifici més conegut, el Magic."
				image={`https://media.discordapp.net/attachments/1157390689068396625/1198264340520898600/rambla-de-badalona.webp`}
				region="Barcelonès"
			/>
		</div>
	</section>
</main>
