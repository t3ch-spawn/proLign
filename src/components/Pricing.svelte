<script>
  import PricingCard from "./reusables/pricingCard.svelte";
  import Btn from "./reusables/Btn.svelte";
  import toggleBubble from "../assets/Switch.svg"
  let hasToggled = false

  function handleToggle(){
    hasToggled = !hasToggled
  }
</script>


<div>
    <div class = "flex flex-col items-center text-center gap-6 mb-8">
        <Btn extraStyles = "!bg-lightOrange !text-primOrange max-w-fit">
            Pricing
        </Btn>

        <h3 class="text-3xl -750:text-[1.7rem] font-bold">
            We are easing the path to effective management
        </h3>
        <p class="max-w-[450px]">Pay more to gain more today. No more redundant tools
            Save time and cost.</p>

            <!-- div housing toggle for monthly or yearly -->  
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div on:click={handleToggle} class="flex gap-6 items-center cursor-pointer">
                <p>Monthly</p>

                <!-- container box that houses the toggle bubble -->
                <div class:active={hasToggled} class="toggle-box border-[1px] overflow-hidden h-[35px] w-[90px] rounded-full shadow-toggle flex items-center">
                    <!-- this empty div is the bubble -->
                    <img class:active={hasToggled} class="toggle-bubble" src={toggleBubble} alt="">
                </div>

                <p>Yearly</p>
            </div>
    </div>
    
    <div class="flex w-[100%] p-6 justify-around flex-wrap gap-8 -950:justify-center">
    
        <PricingCard cardStyles = "bg-[#fce3c833]" heading = "Free" price = "0" btnStyles = "!bg-transparent !text-black !border-black !border-[1px]"/>
        <PricingCard cardStyles = "bg-[#fce3c880]" heading = "Professional" price = "10" btnStyles= "!bg-transparent !text-primOrange !border-primOrange border-[1px] "/>
        <PricingCard cardStyles = "bg-[#fce3c8cc]" heading = "Premium" price = "20" btnStyles = "!bg-primOrange !text-white"/>
    
    </div>
</div>


<style>

    .toggle-bubble{
        /* filter: drop-shadow(-2px 1px 6px rgba(0, 0, 0, 0.25)); */
        transition: 0.3s ease-in-out;
    }

    .toggle-bubble.active{
        transform: translateX(110%);
    }

    .toggle-box{
        transition: 0.3s ease-in-out;
    }

    .toggle-box.active{
        box-shadow:  0px -6px 8px 3px rgba(0, 0, 0, 0.10) inset
    }



</style>