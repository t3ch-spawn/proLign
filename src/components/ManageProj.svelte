<script>
  import ProjectCard from "./reusables/projectCard.svelte";
  import Rocket from "../assets/Rocket.svg"
  import Timer from "../assets/Timer.svg"
  import People from "../assets/People.svg"

</script>

<div class="mt-[100px] bg-[#FFFAF6] gap-12 flex flex-col py-[40px] px-4">
    <!-- container for heading and paragraph -->
    <div class="text-center">
        <h3 class="font-bold text-xl mb-2">Control and manage your projects</h3>
        <p class="text-[0.8rem]">Create tasks efficiently and work together as a team</p>
    </div>

    <!-- container for cards -->
    <div class="flex justify-around gap-4 -850:flex-wrap -850:justify-center">
        <ProjectCard icon={Rocket} heading="Fast performance" para="Take your projects to the next level and consistently meet deadlines."/>
        <ProjectCard icon={Timer} heading="Track progress" para="Keep track of the progress of your team and complete tasks."/>
        <ProjectCard icon={People} heading="Collaborate" para="Collaborate with team members to ensure deadlines are met"/>
    </div>


</div>

<style>

</style>