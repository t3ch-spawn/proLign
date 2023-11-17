<script>
  import Btn from "./reusables/Btn.svelte";
  import play from "../assets/play-btn.svg"
  import dashboard from "../assets/dashboard.png"
</script>


<div class="font-grotesk mx-auto flex flex-col gap-6 items-center mt-[100px] text-center px-2">

    <h1 class="text-5xl font-bold leading-[130%] max-w-[800px]  -800:text-4xl -800:max-w-[600px] -500:text-3xl">Streamline tasks and get your projects done in time</h1>
    <p class="max-w-[700px]">Organize your personal projects and increase your team’s speed, collaboration and alignment by providing a comprehensive of tasks on high priority.</p>

    <!-- Container for buttons -->
    <div class="flex gap-3 w-[100%] max-w-[450px] justify-around font-bold mt-4 -450:flex-col -450:w-[72%] -300:w-[80%]"> 

        <Btn extraStyles= "px-6 py-3">
            Get started for free
        </Btn>

        <Btn extraStyles="border-[1px] border-primOrange !bg-[transparent] !text-primOrange px-6 py-3 flex justify-center items-center gap-4">
            <p>Watch demo</p>
            <img class="h-5" src={play} alt="play">
        </Btn>

    </div>

    <!-- Container for image of dashboard -->
    <img src={dashboard} alt="dashboard" class="w-[75%] mx-auto mt-[80px] -1000:w-[90%] -750:w-[100%] -750:mt-[40px]">

   
</div>

<style>

</style>