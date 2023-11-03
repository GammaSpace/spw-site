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
        <div class="absolute md:-z-10 lg:z-0 -left-[10px] lg:left-0 top-0 bg-bodyBg px-4"><a href="/"><img class="h-[48px] w-auto" src="/img/logo_small.png"></a></div>
    {/if}     
    <div class="absolute {path != "/" ? "md:left-[164px] lg:left-[172px]" : "left-0"} top-0 pl-4 pr-2 py-3">
      <div class="transition -z-10 absolute top-0 left-0 w-full h-full bg-mazeGreen {yPos > 60 ? "opacity-100" : "opacity-80"}"></div>
        {#each menu as item, index}
          <span class="md:px-2 lg:px-3 font-bold text-white">
            <a class="hover:no-underline {item[1] == path ? "no-underline" : ""}" href="{item[1]}">{item[0]}</a>
          </span>
        {/each}
    </div>
  </div>
  <div class="md:hidden relative">
    <div class="main-menu bg-mazeGreen pt-[50px] text-center overflow-hidden {navOpen ? `max-h-[400px]` : `max-h-[50px]`}">
      <div class="">
        {#each menu as item}
          <a class="no-underline" on:click={()=>{navOpen = !navOpen;}} href="{item[1]}">
            <p class="my-0 text-white font-bold underline text-lg hover:no-underline px-12 py-4 ">{item[0]}</p>
          </a>
        {/each}
      </div>
      <button class="absolute top-0 h-[50px] left-0 w-full" on:click={()=>{navOpen = !navOpen;}}>
        <div class="absolute right-2 text-white top-[6px]">
          <img class="w-[36px] h-auto" src="img/hampointer.png">
        </div>
      </button>
    </div>
  </div>
</nav>