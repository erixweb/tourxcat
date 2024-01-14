<script>
	import Home from "../lib/icons/home.svelte"
	import Map from "../lib/icons/map.svelte"
</script>

<nav class="font-sans text-[20px] fixed top-0 left-0 w-full z-50">
	<div class="w-full h-full relative py-[10px]">
		<div class="w-full h-full absolute top-0 left-0 z-0 bg-slate-300/75"/>
		<div class="m-auto p-[10px] w-full max-w-[1050px] flex gap-[20px] z-20 relative">
			<a href="/" class="flex items-center gap-[10px]">
				<Home />
				Inici
			</a>
			<a href="/#llocs" class="flex items-center gap-[10px]">
				<Map />
				Llocs
			</a>
		</div>
	</div>
</nav>