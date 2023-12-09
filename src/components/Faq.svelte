<script>
  import Btn from "./reusables/Btn.svelte";
import arrow from "../assets/drop-arrow.svg"
  import { onMount } from "svelte";

  let clicker = false
    const faqArr = [
        {
            id: 1,
            question: 'Can i sign in with different devices',
            response: 'No answers are currently available',
        },
        {
            id: 2,
            question: 'Can I integrate prolign with other tools I use, such as email or calendar apps?',
            response: 'No answers are currently available',

        },
        {
            id: 3,
            question: 'What kind of support is available if I have questions or encounter issues?',
            response: 'We offer customer support to assist you with any questions or problems you may have. Feel free to reach out to our support team through our Contact page.',
        },
        {
            id: 4,
            question: 'What is a refund poliy',
            response: 'No answers are currently available',
        },
        {
            id: 5,
            question: 'Can I try prolign before committing to a paid plan?',
            response: 'No answers are currently available',
        },
        {
            id: 6,
            question: 'Can I try prolign before committing to a paid plan?',
            response: 'No answers are currently available',
        },
    ]

    onMount(()=>{

            const arrows = document.querySelectorAll('.drop_arrow')

            console.log(arrows)
            
            arrows.forEach((arrow, idx)=>{
                let clicked = false
                arrow.addEventListener('click', (e)=>{

                    
                    const parentDiv = arrow.parentElement.parentElement
                    const response = parentDiv.querySelector('.response')
                    // const line = parentDiv.parentElement.querySelector('.line')
                    const line = parentDiv.parentElement.nextElementSibling
                    line.classList.toggle('active')
                    response.classList.toggle('active')
                    arrow.classList.toggle('active')
                })
            })

    })
    
</script>

<div class="mt-[100px] mx-auto w-[100%] flex flex-col items-center">

  <!-- container for heading -->
<div class="flex flex-col gap-2 items-center">
    <Btn extraStyles = "!bg-lightOrange !text-primOrange max-w-fit">
        FAQ
    </Btn>
<h3 class="text-xl max-w-[210px] text-center">
    Questions you might want to ask
</h3>
  </div>


  <!-- Container for the faqs -->

  <div class="flex flex-col items-start my-[100px] gap-6 w-[90%]">

    {#each faqArr as faq}
        <div class="flex gap-8 items-start w-[100%]">
            <p class="font-extrabold">{faq.id}.</p>
            <div class="flex flex-col relative w-[100%]">
                <!-- div containing quesiton and drop down -->
                <div class="flex w-[100%] justify-between items-start gap-4">
             
                    <div class="max-w-[700px]">{faq.question}</div>
                    <img class:active={clicker} src={arrow} alt="" class=" drop_arrow cursor-pointer">
            
                </div>
        
                <!-- drop down which animates -->
                <div class:active={clicker} class="response max-w-[700px]">{faq.response}</div>
                
                <!-- line that demacates each faq -->
                
                <!-- drop down icon (positioned absolutely) -->
        
            </div>
        </div>
        <hr class:active={clicker} class="line border-none bg-black h-[0.5px] w-[100%]">
    {/each}

  </div>


</div>

<style>

    .response{
        overflow: hidden;
        transform: scaleY(0);
        transition: 0.3s ease-in-out;
        opacity: 0;
        max-height: 0;
        margin-top: 1rem;
    }

    .response.active{
        position: relative;
        transform: scaleY(1);
        opacity: 1;
        max-height: 500px
    }

    .drop_arrow{
        transition: 0.3s
    }

    .drop_arrow.active{
        transform: rotate(180deg);
    }

    .line{
        transition: 0.6s
    }

    .line.active{
        width: 0%
    }

</style>