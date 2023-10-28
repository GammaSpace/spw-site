<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import { marked } from "marked";
  import { onMount } from 'svelte';
  import intro from '$lib/txt/questions-for-agencies/intro.md?raw';
  import questions from '$lib/txt/questions-for-agencies/questions.md?raw';

  let questionContent = "";
  let toCArray: Array<Array<string>> = [];
  
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
  $: anchorOffset = windowWidth < 700 ? 20 : 0;

  marked.use({ renderer });

  onMount(()=>{
    questionContent = marked.parse(questions);
  })

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
  <h2>Questions for Agencies</h2>
  <div class="my-8 flex flex-wrap flex-col-reverse md:flex-row pt-4">
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