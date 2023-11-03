<script>
  import { goto } from '$app/navigation';
  import SvelteMarkdown from 'svelte-markdown';
  import intro from '$lib/txt/landing/intro.md?raw';
  import quote from '$lib/txt/landing/quote.md?raw';
  import funders from '$lib/txt/landing/collab/funders.md?raw';
  import collab from '$lib/txt/landing/collab/collab.md?raw';
  import land from '$lib/txt/landing/land.md?raw';

  const credits = [
    collab,
    funders
  ]
</script> 

<div class="-ml-8 -mt-12 w-[calc(100%+64px)] md:-ml-12 md:-mt-24 md:w-[calc(100%+96px)] xl:-mt-32">
  <img class="w-full h-full mx-auto object-cover" src="img/main_header_comp.png" />
</div>
<div class="mt-8 flex flex-wrap pt-4">
  <div class="intro-text w-full md:w-3/5 md:pr-12 xl:pr-16">
    <SvelteMarkdown source={intro}/>
  </div>
  <div class="w-full md:w-2/5 quote">
    <div class="-mt-4 md:-mt-14 mb-6 ml-[45%] md:ml-0">
      <img class="w-[30px] h-auto" src="/img/arrow_lil_down.png"/>
    </div>
    <div class="bg-boxYellow w-full p-8 mb-8 md:mb-20">
      <button on:click={()=>{goto("/report")}} class="download-button bg-mazeGreen rounded-md w-full py-2 px-2 lg:px-4 mx-auto text-lg font-bold text-white">Download the Report</button>
    </div>
    <div class="hidden md:block ml-[35%] md:pt-6 md:-ml-8 mb-4">
      <img class="w-[100px] h-auto" src="/img/arrow_zig.png"/>
    </div>
    <SvelteMarkdown source={quote}/>
  </div>
  <div class="w-full"><img class="mx-auto w-[50px] md:w-[100px]" src="img/spacer.png"></div>
</div>
<div class="my-8 flex flex-wrap pt-4">
  <h2>Treaty Responsibilities</h2>
  <div class="w-full border-8 border-mazeGreen rounded-md px-4 pt-4">
    <SvelteMarkdown source={land}/>
  </div>
</div>
<div class="mt-8 flex flex-wrap pt-4">
  <div class="w-full mb-4">
    <h2>Funders & Collaborators</h2>
    <div class="flex flex-wrap md:gap-10">
      {#each credits as ppl}
        <div class="w-full md:w-[calc(50%-20px)]">
          <SvelteMarkdown source={ppl}/>
        </div>
      {/each}
    </div>
  </div>
  <div class="w-full flex flex-wrap justify-center items-center">
    <div class="logo">
      <img class="w-full" src="/img/logos/logo_gbc.jpg"/>
    </div>
    <div class="logo">
      <img class="w-full" src="/img/logos/logo_wfc.jpg"/>
    </div>
    <div class="logo">
      <img class="w-full" src="/img/logos/logo_tdin.jpg"/>
    </div>
    <div class="logo">
      <img class="w-full" src="/img/logos/logo_cihr.jpeg"/>
    </div>
    <div class="pr-8 w-full mb-4 md:w-3/4">
      <img class="w-full" src="/img/logos/logo_sshrc.jpg"/>
    </div>
    <div class="logo">
      <img class="w-full" src="/img/logos/logo_nserc.jpg"/>
    </div>
  </div>
</div>