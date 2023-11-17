<script>
    export let icon = ""
    export let heading = ""
    export let para = ""

</script>

<div class="bg-white flex flex-col p-6 gap-5 max-w-[280px] items-start rounded-xl">
    <!-- icon -->
    <img class="h-12" src={icon} alt="">

    <!-- Heading -->
    <h4 class="text-md font-semibold">{heading}</h4>

    <!-- Paragraph -->
    <p class="text-sm">{para}</p>
    

</div>

<style>

</style>