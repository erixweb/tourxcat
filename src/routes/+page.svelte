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
				title="De visita per Girona"
				description="Visita els llocs històrics de la ciutat i els carrers medievals de la ciutat."
				image={`https://erixweb.github.io/images/tourxcat/girona.avif`}
				region="Gironès"
			/>
			<Card

			description="Visita Cadaqués, un lloc amb unes platjes increïbles i un paisatge marevellós."
			title="Cadaqués, per anar a la platja"
				image={`https://erixweb.github.io/images/tourxcat/cadaques-main.avif`}
				region="Barcelonès"
			/>
		</div>
	</section>
</main>
