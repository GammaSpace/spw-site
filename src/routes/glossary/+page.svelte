<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { marked } from 'marked';
  import intro from '$lib/txt/glossary/intro.md?raw';
  import glossary from '$lib/txt/glossary/glossary.md?raw';
  import SvelteMarkdown from 'svelte-markdown';

  let glossaryContent:string = "";
  let toCArray: Array<Array<string>> = [];
  let scrollListenerAdded:boolean = false;
  $: root = null;

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
    if ( $page.url.hash != "" ) {
      setTimeout(()=>{
        const link = $page.url.hash;
        const anchorId = link.replace('#', '');
        const anchor = document.getElementById(anchorId);
        window.scrollTo({
          top: anchor.offsetTop + anchorOffset,
          behavior: 'smooth'
        })
      }, 200);
    }
  })

  $: windowWidth = 0;
  $: anchorOffset = windowWidth < 700 ? -20 : 0;

  function handleAnchorClick (event) {
		event.preventDefault()
		const link = event.currentTarget;
		const anchorId =  new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop + anchorOffset,
			behavior: 'smooth'
		})
	}

  let allAnchors: NodeListOf<HTMLHeadingElement>;
  let allLinks: NodeListOf<HTMLLinkElement>;

  $: if (root != null && !scrollListenerAdded) {
    scrollListenerAdded = true;
    allAnchors = root.querySelectorAll('b');
    allLinks = root.querySelectorAll('#questions-toc > p > a');
    console.log(allAnchors);
    console.log(allLinks);

    window.addEventListener('scroll', (event) => {
      if (typeof(allAnchors) != 'undefined' && allAnchors != null && typeof(allLinks) != 'undefined' && allLinks != null) {
        let scrollTop = window.scrollY;
        
        // highlight the last scrolled-to: set everything inactive first
        allLinks.forEach((allLinks, index) => {
          allLinks.classList.remove("active");
        });
        
        // then iterate backwards, on the first match highlight it and break
        for (var i = allAnchors.length-1; i >= 0; i--) {
          if (scrollTop > allAnchors[i].offsetTop - 10) {
            allLinks[i].classList.add('active');
            break;
          }
        }
      }
    });
  } 
</script> 

<svelte:window bind:innerWidth={windowWidth}/>

{#if glossaryContent != ""}
  <div class="mt-8 flex flex-wrap pt-4">
    <div class="w-full md:w-3/5 md:pr-12 xl:pr-16">
      <SvelteMarkdown source={intro}/>
    </div>
    <div class="w-full md:w-2/5">
      <div class="h-full my-auto w-full md:w-[90%]">
        <img class="max-w-[150px] md:w-[90%] md:max-w-[350px] mx-auto" src="/img/maze_part_narrow.png"/>
      </div>
    </div>
  </div>
  <div bind:this={root} class="mt-8 flex flex-wrap flex-col-reverse md:flex-row pt-4">  
    <div class="w-full md:w-3/5 md:pr-12 xl:pr-16 md:mb-24">
      {@html glossaryContent}
    </div>
    <div class="w-full md:w-2/5">
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