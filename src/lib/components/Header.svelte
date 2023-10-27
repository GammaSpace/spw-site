<script>
  //import { gsLogo, gamma_burst_white } from "$lib/svg/svg.js"; 
  import { page } from "$app/stores";

  const menu = [
    ["Home","/"],
    ["Report","/report"],
    ["Steering Committee","/steering-committee"],
    ["Questions for Agencies","/questions-for-agencies"],
    ["Glossary","/glossary"],
  ]

  $: navOpen = false;
  
  let yPos = 0;

  $: path = $page.url.pathname;
</script>

<svelte:window bind:scrollY={yPos} /> 

<nav class="top-0 w-full fixed md:sticky z-10 md:max-w-screen-xl md:mx-auto">
  <div class="top-0 main-header hidden md:block px-12 py-4">   
    {#if path != "/"}
        <div class="absolute left-0 top-0 bg-bodyBg px-4"><a href="/"><img class="h-[48px] w-auto" src="/img/logo_small.png"></a></div>
    {/if}     
    <div class="absolute {path != "/" ? "left-[172px]" : "left-0"} top-0 pl-4 pr-2 py-3">
      <div class="transition -z-10 absolute top-0 left-0 w-full h-full bg-mazeGreen {yPos > 60 ? "opacity-100" : "opacity-80"}"></div>
      {#each menu as item, index}
        <span class="px-3 font-bold underline text-white"><a href="{item[1]}">{item[0]}</a></span>
      {/each}
    </div>
  </div>
  <div class="md:hidden relative">
    <div class="main-menu bg-mazeGreen px-12 pt-[50px] text-center overflow-hidden {navOpen ? `max-h-[400px]` : `max-h-[50px]`}">
      {#each menu as item}
        <div class="py-4"><a class="text-white font-bold underline text-lg" on:click={()=>{navOpen = !navOpen;}} href="{item[1]}">{item[0]}</a></div>
      {/each}
      <div class="absolute top-0 right-8 ">
        <p><button class="text-white -mt-1 -mr-5 w-[45px] h-auto" on:click={()=>{navOpen = !navOpen;}}>-</button></p>
      </div>
    </div>
  </div>
</nav>