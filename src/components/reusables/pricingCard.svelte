<script>
import Btn from "./Btn.svelte";
import tick from "../../assets/price-tick.svg"
export let listArr = ["Connect", "1 year support", "Progress Level", "Private Chat", "Custom domain"]
export let heading = "Free"
export let price = "10"
export let cardStyles = ''
export let btnStyles = ''
</script>


<div class={`p-10 px-14 rounded-lg flex flex-col gap-8 items-center ${cardStyles} -500:px-10 -500:w-[90%]`}>

    <!-- heading -->
    <h3 class="font-bold">
        {heading}
    </h3>

    <!-- price -->
    <h3 class="text-3xl font-extrabold">
       {price}$
    </h3>

    <!-- list items -->
    <ul class="flex flex-col gap-8 items-start self-start">
        {#each listArr as item}
            <li class="flex gap-8">
                <img src={tick} alt="tick">
                <p>{item}</p>
            </li>
        {/each}
    </ul>


    <Btn extraStyles = {`${btnStyles} !p-4 !px-12 !rounded-2xl -500:!px-8`}>
        Get started for free
    </Btn>

</div>


<style>

</style>