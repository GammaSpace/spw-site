<script>
  import SvelteMarkdown from 'svelte-markdown';
  import intro from '$lib/txt/steering-committee/intro.md?raw';
  import treaty from '$lib/txt/steering-committee/treaty.md?raw';
  import quote from '$lib/txt/steering-committee/quote.md?raw';
  import dawnmarie from '$lib/txt/steering-committee/bios/dawnmarie.md?raw';
  import griffin from '$lib/txt/steering-committee/bios/griffin.md?raw';
  import julia from '$lib/txt/steering-committee/bios/julia.md?raw';
  import lindsay from '$lib/txt/steering-committee/bios/lindsay.md?raw';
  import madelyn from '$lib/txt/steering-committee/bios/madelyn.md?raw';
  import marcAndre from '$lib/txt/steering-committee/bios/marc-andre.md?raw';
  import maria from '$lib/txt/steering-committee/bios/maria.md?raw';
  import michael from '$lib/txt/steering-committee/bios/michael.md?raw';
  import suwaida from '$lib/txt/steering-committee/bios/suwaida.md?raw';
  import videos from '$lib/txt/steering-committee/resources/videos.md?raw';
  import podcasts from '$lib/txt/steering-committee/resources/podcasts.md?raw';
  import websites from '$lib/txt/steering-committee/resources/websites.md?raw';
  import books from '$lib/txt/steering-committee/resources/books.md?raw';
  import essays from '$lib/txt/steering-committee/resources/essays.md?raw';
  import news from '$lib/txt/steering-committee/resources/news.md?raw';

  let bios = [
    griffin,     
    suwaida,
    madelyn,
    dawnmarie,
    marcAndre,
    lindsay,
    maria, 
    michael,
    julia,
  ]

  let resources = [
    videos,
    podcasts,
    websites,
    books,
    essays,
    news
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
  <div class="w-full md:w-4/5 md:pr-12 xl:pr-16">
    <h2>Steering Committee Bios</h2>
    {#each bios as bio}
      <SvelteMarkdown source={bio}/>
    {/each}
  </div>
</div>
<div class="mt-8 flex flex-wrap pt-4">
  <div class="w-full md:w-4/5 md:pr-12 xl:pr-16">
    <SvelteMarkdown source={treaty}/>
  </div>
</div>
<div class="mt-4 mb-8 md:mb-12 flex flex-wrap">
  <div class="grid md:grid-cols-2 gap-y-8 md:gap-12 xl:gap-16">
    {#each resources as res}
      <div class="resource-box border-2 border-mazeGreen rounded-md">
        <SvelteMarkdown source={res}/>
      </div>
    {/each}
  </div>
</div>
<div class="w-full md:w-2/5"><img class="mx-auto md:mx-0 md:ml-12 w-[60px] md:w-[90px]" src="img/spacer.png"></div>
<div class="mt-8 flex flex-wrap pt-4 justify-center">
  <div class="md:w-3/5 quote">
    <SvelteMarkdown source={quote}/>
  </div>  
</div>