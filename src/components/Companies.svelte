<script>
    import Spotify from "../assets/Spotify.svg"
    import Google from "../assets/Google.svg"
    import Notion from "../assets/Notion.svg"
    import Visa from "../assets/Visa.svg"
    import Payoneer from "../assets/Payoneer.svg"

</script>

<div class="font-grotesk mx-auto flex flex-col items-center justify-center w-[100%] mt-[100px] gap-12">

    <h3 class="font-semibold text-center text-xl">Join 12,000+ companies already growing </h3>

<!-- Container for company logos -->
<div class="logos-container flex flex-wrap justify-around gap-6 w-[90%] mx-auto">
    <img src={Spotify} alt="">
    <img src={Google} alt="">
    <img src={Notion} alt="">
    <img src={Visa} alt="">
    <img src={Payoneer} alt="">
</div>


</div>

<style>

    .logos-container img{
        height: 2rem;
    }

</style>