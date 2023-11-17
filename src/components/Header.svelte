<script>
    import logo from "../assets/logo.svg"
    import { onMount } from "svelte";
  import Btn from "./reusables/Btn.svelte";
    const navItemArr = ["About us", "Pricing", "Products", "Contact", "Career"]

    let isShown = false;
    let not = ''
    let ham


    function handleMenu(){

        isShown = !isShown
    if (ham.classList.contains('active')) {
      not = 'not'
    } else {
        not = ''
    }
    }



</script>

<!-- container for overlay -->


<div
class:active={isShown}
class="overlay fixed bg-overlay pointer-events-none z-[10]"
on:click={handleMenu}
></div>

<!-- container for logo and hamburger(only shown for smaller screens using the hamburger) -->
<div class="hidden sticky top-0 bg-white shadow-md -850:flex justify-between w-[100%] px-8  mx-auto py-6">
    <!-- logo shown on mobile -->
<div class='hidden -850:block relative'>
    <img src={logo} alt="">

</div>

<!-- container for hamburger -->

<div
bind:this={ham}
on:click={handleMenu}
class={`hamburger ${isShown ? 'active' : ''} ${not}`}
>
<div class="ham-bar ham-bar-1"></div>
<div class="ham-bar ham-bar-2"></div>
<div class="ham-bar ham-bar-3"></div>
</div>
</div>

<nav class="navbar sticky top-0 flex justify-between items-center p-6 px-20 w-[100%] bg-white shadow-md -1000:px-10 -1000:w-[100%] mx-auto font-grotesk font-medium -850:border-overlay -850:border-[1px]" 
class:active={isShown}

>
    <!-- Container for the logo -->
    <div class="-850:hidden">
        <img src={logo} alt="">
    </div>

    <!-- Container for the links -->
        <ul class="flex gap-6 -850:gap-4 -850:flex-col -850:items-center -850:mb-8">
            {#each navItemArr as item}
                <li class="nav-item relative" >
                    <a href="/">{item}</a>
                </li>
            {/each}
        </ul>
    

    <!-- Container for login/sign up btns -->

    <div class="flex gap-6 -850:gap-4 font-bold text-lg items-center">
        <button class="relative nav-item">Login</button>
        <!-- <button class="bg-primOrange text-white px-4 py-1 rounded-md">Get Started</button> -->
        <Btn>
          Get Started
        </Btn>

    </div>

</nav>





<style>
    .overlay{
        transition: 1s;
    }
    .overlay.active{
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        pointer-events: all;
    }

    .nav-item{
        height: fit-content
    }

    .nav-item::before{
        content: '';
        width: 0%;
        height: 2px;
        border-radius: 2px;
        background: #000;
        position: absolute;
        bottom: -2px;
        transition: 0.3s;
        left: 50%;

    }

    .nav-item:hover:before{
        width: 100%;
        left: 0;

    }


    @media screen and (max-width: 850px) {
        .nav-item:hover:before{
        width: 0%;
    }
  .navbar {
    opacity: 0;
    pointer-events: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    position: fixed;
    width: 40%;
    flex-direction: column;
    z-index: 25;
    transition: 0.3s ease;
    display: flex;
    padding: 50px 0;
    gap: 20px;
    
  }

  .navbar.active {
    display: flex;
    opacity: 1;
    pointer-events: all;
    border-radius: 10px;
    color: black;
    width: 80%;
    z-index: 20;
  }

  .navbar nav ul {
    flex-direction: column;
  }

  .navbar > div {
    flex-direction: column;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    gap: 4px;
    cursor: pointer;
    z-index: 20;

  }

  .ham-bar {
    height: 3px;
    width: 100%;
    background-color: black;
    border-radius: 3px;
    transition: 0.3s;
  }

  .hamburger.active .ham-bar-1 {
    animation: animBar-1;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
  }

  .hamburger.not .ham-bar-1 {
    animation: animBar-1-reverse;
    animation-fill-mode: backwards;
    animation-duration: 0.5s;
  }

  .hamburger.active .ham-bar-2 {
    transform: translateX(20px);
    opacity: 0;
  }

  .hamburger.active .ham-bar-3 {
    animation: animBar-3;
    animation-fill-mode: forwards;
    animation-direction: normal;
    animation-duration: 0.5s;
  }

  .hamburger.not .ham-bar-3 {
    animation: animBar-3-reverse;
    animation-fill-mode: forwards;
    animation-direction: normal;
    animation-duration: 0.5s;
  }

  @keyframes animBar-1 {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(7px);
    }
    100% {
      transform: translateY(7px) rotate(45deg);
    }
  }
  @keyframes animBar-1-reverse {
    0% {
      transform: translateY(7px) rotate(45deg);
    }

    50% {
      transform: translateY(7px);
    }

    100% {
      transform: translateY(0px);
    }
  }
  @keyframes animBar-3 {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-7px);
    }
    100% {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
  @keyframes animBar-3-reverse {
    0% {
      transform: translateY(-7px) rotate(-45deg);
    }
    50% {
      transform: translateY(-7px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}


</style>