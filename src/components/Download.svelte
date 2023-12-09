<script>
    import googleBtn from "../assets/googleplay.svg"
    import appleBtn from "../assets/appstore.svg"
    import phones from "../assets/phone-download.jpg"
</script>

<div class="flex justify-around bg-creamBg py-6 items-center mx-auto p-4 w-[100%] mt-[100px] -950:flex-col -950:gap-14">

<!-- div housing typography and buttons -->
<div class="max-w-[480px] flex flex-col gap-12 -950:text-center -950:items-center">
    <h3 class="max-w-[400px] text-4xl -750:text-2xl font-medium">
        Download <span class="text-primOrange">Prolign</span> mobile app
    </h3>

    <p class="text-sm text-[rgba(0,0,0,0.6)]">Prolign is a project management app that helps organize your personal projects and increase your team’s speed, collaboration and alignment by providing a comprehensive of tasks on high priority.</p>

    <div class="flex gap-8 -450:flex-col">
        <a href="#"><img class="max-w-[180px]" src={googleBtn} alt="download"></a>
        <a href="#"><img class="max-w-[180px]"  src={appleBtn} alt="download"></a>
    </div>
</div>

<!-- image of phones -->
<img class="max-w-[400px] -450:max-w-[300px] overflow-hidden" src={phones} alt="">

</div>

<style>

</style>