<script>
  import { goto } from '$app/navigation';
  import SvelteMarkdown from 'svelte-markdown';
  import intro from '$lib/txt/report/intro.md?raw';
  import quote from '$lib/txt/report/quote.md?raw';
  import findings from '$lib/txt/report/findings.md?raw';
  import report_intro from '$lib/txt/report/report_intro.md?raw';
  import report_full from '$lib/txt/report/report_full.md?raw';
  import report_summary from '$lib/txt/report/report_summary.md?raw';
  import report_short from '$lib/txt/report/report_short.md?raw';
  import thePublic from '$lib/txt/report/public.md?raw';

  const reportArr = [
    { text: report_full, url: "https://drive.google.com/file/d/1pc2n7zdeR9tJhdE5OsPF0GJYz2kn6rnO/view?usp=drive_link" },
    { text: report_summary, url: "https://drive.google.com/file/d/1MVh9sEefIAWFiX3xZ2YDimmLv9ZumhjH/view?usp=drive_link" },
    { text: report_short, url: "https://drive.google.com/file/d/11iKXJC4sG9e_6GxN4r95vFpAC6aVwyEr/view?usp=drive_link" },
  ]
</script> 

<div class="mt-8 flex flex-wrap pt-4">
  <div class="w-full md:w-3/5 md:pr-12 xl:pr-16">
    <SvelteMarkdown source={intro}/>
  </div>
  <div class="w-full md:w-2/5">
    <div class="h-full my-auto w-full md:w-[90%]">
      <img class="max-w-[150px] md:w-[90%] md:max-w-[350px] mx-auto" src="/img/maze_part.png"/>
    </div>
  </div>
</div>
<div class="my-8 flex flex-wrap pt-4">
  <div class="w-full mx-auto border-8 border-mazeGreen rounded-md px-4 pt-4">
    <SvelteMarkdown source={findings}/>
  </div>
</div>
<div class="mt-8 flex flex-wrap pt-4 md:-mb-8">
  <div class="w-full md:w-3/5">
    <SvelteMarkdown source={report_intro}/>
  </div>  
  <div class="w-full md:w-2/5"><img class="-scale-x-100 mx-auto md:mx-0 md:-ml-12 md:mt-16 w-[60px] md:w-[90px]" src="img/spacer.png"></div>
</div>
{#each reportArr as report}
  <div class="mt-8 flex flex-wrap pt-4">
    <div class="w-full md:w-3/5 md:pr-12 xl:pr-16">
      <SvelteMarkdown source={report.text}/>
    </div>
    <div class="w-full md:w-2/5">
      <div class="bg-boxYellow w-full p-8 mb-8 md:mb-20 md:mt-16">
        <button on:click={()=>goto(report.url)} class="download-button bg-mazeGreen rounded-md w-full py-2 px-2 lg:px-4 mx-auto text-lg font-bold text-white">Download the Report</button>
      </div>
    </div>
  </div>
{/each}
<div class="w-full text-center my-6">
  <SvelteMarkdown source={thePublic}/>
</div>
<div class="w-full md:w-2/5"><img class="mx-auto md:mx-0 md:ml-12 w-[60px] md:w-[90px]" src="img/spacer.png"></div>
<div class="mt-8 flex flex-wrap pt-4 justify-center">
  <div class="md:w-3/5 quote">
    <SvelteMarkdown source={quote}/>
  </div>  
</div>