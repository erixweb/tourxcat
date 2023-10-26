<script lang="ts">
    export let title: string
    export let description: string
    export let image: string

</script>
<a href="/" class="max-w-[450px] m-auto active:scale-105 transition-all duration-250">
    <div>
        <img src={image} alt={`Imatge de ${title}`} class="rounded-[15px]">
    </div>
    <div class="p-[1em]">
        <h2 class="font-bold text-[20px]">
            {title}
        </h2>
        <p>
            {description}
        </p>
    </div>
</a>