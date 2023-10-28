<script>
  import { goto } from '$app/navigation';
  import SvelteMarkdown from 'svelte-markdown';

  /** @type {import('./$types').PageData} */
	export let data;
</script> 

<div class="mt-8 flex flex-wrap pt-4">
  <div class="w-full md:w-3/5 md:pr-12 xl:pr-16">
    <SvelteMarkdown source={data.intro}/>
  </div>
  <div class="md:w-2/5">
    <div class="h-full my-auto">
      <img class="w-[90%] max-w-[350px] mx-auto" src="/img/maze_part.png"/>
    </div>
  </div>
</div>
<div class="my-8 flex flex-wrap pt-4">
  {#each data.bioText as bio}
    <SvelteMarkdown source={bio}/>
  {/each}
</div>