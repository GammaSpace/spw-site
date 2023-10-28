<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { marked } from 'marked';
  import glossary from '$lib/txt/glossary/glossary.md?raw';

  let glossaryContent:string = "";
  let toCArray: Array<Array<string>> = [];

  const renderer = {
    strong(text:string) {
      let id:string = text.toLowerCase().replaceAll(/[ \/]/g,'-').replaceAll(/[\:\"\“\”]/g,'');
      let linkText = text.replace(':','');
      toCArray.push( [id, linkText] );
      return `<b id=${id}>${text}</b>`;
    },
  }

  marked.use({ renderer });

  onMount(()=>{
    glossaryContent = marked.parse(glossary);
  })

  $: windowWidth = 0;
  $: anchorOffset = windowWidth < 700 ? 20 : 0;

  onMount(()=> {
    setTimeout(()=>{
      const link = $page.url.hash;
      const anchorId = link.replace('#', '');
      const anchor = document.getElementById(anchorId);
      console.log(anchor);
      window.scrollTo({
        top: anchor.offsetTop + anchorOffset,
        behavior: 'smooth'
      })
    },200)
  })

  function handleAnchorClick (event) {
		event.preventDefault()
		const link = event.currentTarget;
		const anchorId =  new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
    console.log(anchor);
		window.scrollTo({
			top: anchor.offsetTop + anchorOffset,
			behavior: 'smooth'
		})
	}
</script> 

<svelte:window bind:innerWidth={windowWidth}/>

{#if glossaryContent != ""}
  <div class="mt-8 flex flex-wrap flex-col-reverse md:flex-row pt-4">
    <div class="w-full md:w-3/5 md:pr-12 xl:pr-16">
      <h2>Glossary</h2>
      {@html glossaryContent}
    </div>
    <div class="glossary-toc w-full md:w-2/5">
      <div class="md:sticky md:top-[80px]">
        <div id="questions-toc">
          {#each toCArray as topic} 
            <p><a href="#{topic[0]}" on:click={handleAnchorClick}>{topic[1]}</a></p>
          {/each}
        </div>
      </div>
    </div> 
  </div>
{/if}