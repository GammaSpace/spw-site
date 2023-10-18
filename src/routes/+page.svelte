<script>
  import SvelteMarkdown from 'svelte-markdown';
  import { marked, Renderer } from 'marked';
  import { onMount } from 'svelte';

  /** @type {import('./$types').PageData} */
	export let data;
  const defaultRenderer = new Renderer();
</script> 

<div class="-ml-8 -mt-12 w-[calc(100%+64px)] md:-ml-12 md:-mt-24 md:w-[calc(100%+96px)] xl:-mt-32">
  <img class="w-full h-full mx-auto object-cover" src="img/main_header_comp.png" />
</div>
<div class="mt-8 flex flex-wrap pt-4">
  <div class="w-full md:w-3/5 md:pr-12 xl:pr-16">
    <SvelteMarkdown source={data.intro}/>
  </div>
  <div class="w-full md:w-2/5 quote">
    <SvelteMarkdown source={data.quote}/>
  </div>
  <div class="w-full"><img class="mx-auto w-[50px] md:w-[100px]" src="img/spacer.png"></div>
</div>
<div class="mt-8 flex flex-wrap pt-4">
  <div class="w-full">
    <h2>Funders & Collaborators</h2>
    <SvelteMarkdown source={data.funders}/>
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
  <div class="my-8 flex flex-wrap pt-4">
    <h2>Land Acknowledgements</h2>
    <div class="w-full border-4 border-mazeGreen rounded-md px-4 pt-4">
      <SvelteMarkdown source={data.land}/>
    </div>
  </div>
</div>