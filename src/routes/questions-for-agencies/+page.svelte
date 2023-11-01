<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import { marked } from "marked";
  import { onMount } from 'svelte';
  import intro from '$lib/txt/questions-for-agencies/intro.md?raw';
  import questions from '$lib/txt/questions-for-agencies/questions.md?raw';

  let questionContent = "";
  let toCArray: Array<Array<string>> = [];
  let scrollListenerAdded:boolean = false;
  $: root = null;
  
  const renderer = {
    heading(text:string, level:number) {
      let id:string = text.toLowerCase().replaceAll(' ','-');
      toCArray.push( [id, text] );
      return `
        <div class="agency-topic">
          <h${level} id=${id}>
            ${text}
          </h${level}>
        </div>
      `
    },
  }

  $: windowWidth = 0;
  $: anchorOffset = windowWidth < 700 ? -20 : 0;

  marked.use({ renderer });

  let allAnchors: NodeListOf<HTMLHeadingElement>;
  let allLinks: NodeListOf<HTMLLinkElement>;

  onMount(()=>{
    questionContent = marked.parse(questions);
  })

  $: if (root != null && !scrollListenerAdded) {
    scrollListenerAdded = true;
    allAnchors = root.querySelectorAll('h3');
    allLinks = root.querySelectorAll('#questions-toc > p > a');

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

  function handleAnchorClick (event) {
		event.preventDefault()
		const link = event.currentTarget;
		const anchorId =  new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor.offsetTop + anchorOffset,
			behavior: 'smooth'
		})
	}
</script> 

<svelte:window bind:innerWidth={windowWidth} /> 

{#if questionContent != ""}
  <div class="mt-0 md:mt-8 flex flex-wrap pt-4">
    <div class="w-full md:w-3/5 md:pr-12 xl:pr-16">
      <SvelteMarkdown source={intro}/>
    </div>
    <div class="w-full md:w-2/5">
      <div class="h-full my-auto w-full md:w-[90%]">
        <img class="max-w-[150px] md:w-[90%] md:max-w-[350px] mx-auto" src="/img/maze_part.png"/>
      </div>
    </div>
  </div>
  <div bind:this={root} class="my-8 flex flex-wrap flex-col-reverse md:flex-row pt-4">
    <div class="agency-questions w-full md:w-3/5 md:pr-12 xl:pr-16">
      {@html questionContent}
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