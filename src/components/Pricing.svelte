<script>
  import PricingCard from "./reusables/pricingCard.svelte";


</script>


<div class="flex w-[100%] p-6 justify-around flex-wrap gap-8 -950:justify-center">

    <PricingCard cardStyles = "bg-[#fce3c833]" heading = "Free" price = "0" btnStyles = "!bg-transparent !text-black !border-black !border-[1px]"/>
    <PricingCard cardStyles = "bg-[#fce3c880]" heading = "Professional" price = "10" btnStyles= "!bg-transparent !text-primOrange !border-primOrange border-[1px] "/>
    <PricingCard cardStyles = "bg-[#fce3c8cc]" heading = "Premium" price = "20" btnStyles = "!bg-primOrange !text-white"/>

</div>


<style>

</style>