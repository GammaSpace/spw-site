<script>
  import SvelteMarkdown from 'svelte-markdown';
  import intro from '$lib/txt/steering-committee/intro.md?raw';
  import dawnmarie from '$lib/txt/steering-committee/bios/dawnmarie.md?raw';
  import griffin from '$lib/txt/steering-committee/bios/griffin.md?raw';
  import julia from '$lib/txt/steering-committee/bios/julia.md?raw';
  import lindsay from '$lib/txt/steering-committee/bios/lindsay.md?raw';
  import madelyn from '$lib/txt/steering-committee/bios/madelyn.md?raw';
  import marcAndre from '$lib/txt/steering-committee/bios/marc-andre.md?raw';
  import maria from '$lib/txt/steering-committee/bios/maria.md?raw';
  import michael from '$lib/txt/steering-committee/bios/michael.md?raw';
  import suwaida from '$lib/txt/steering-committee/bios/suwaida.md?raw';

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
</script> 

<div class="mt-8 flex flex-wrap pt-4">
  <div class="w-full md:w-3/5 md:pr-12 xl:pr-16">
    <SvelteMarkdown source={intro}/>
  </div>
  <div class="md:w-2/5">
    <div class="h-full my-auto">
      <img class="w-[90%] max-w-[350px] mx-auto" src="/img/maze_part.png"/>
    </div>
  </div>
</div>
<div class="my-8 flex flex-wrap pt-4">
  {#each bios as bio}
    <SvelteMarkdown source={bio}/>
  {/each}
</div>