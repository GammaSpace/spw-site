<script>
  import { gamma_burst_black } from "$lib/svg/svg";

  const socials = [
    { url: "https://twitter.com/supportpeerwork", src: "svg/twitter.svg" },
    { url: "https://www.facebook.com/61553306600809", src: "svg/facebook.svg" },
    { url: "https://www.youtube.com/@supportingpeerwork", src: "svg/youtube.svg" },
    { url: "https://www.tiktok.com/@supportingpeerwork", src: "svg/tiktok.svg" },
    { url: "https://www.instagram.com/supportingpeerwork", src: "svg/instagram.svg" }
  ]
</script>

<footer class="relative bottom-0 max-w-screen-xl mx-auto px-8 pt-6">
  <div class="-ml-8 -mt-4 w-[calc(100%+64px)] md:-ml-12 md:mt-0 md:w-[calc(100%+80px)]">
    <img class="w-full h-full mx-auto object-cover" src="/img/footer_hr.png" />
  </div>
  <div class="md:absolute md:left-6 justify-end md:justify-start -mr-4 md:mr-0 mt-4 mb-2 md:mb-0 md:mt-2 flex flex-wrap">
    {#each socials as social}
      <a class="m-0 p-0" href={social.url}><img class="w-[48px] h-auto ml-4 md:ml-0 md:mr-4" src={social.src}/></a>
    {/each}
  </div>
  <div class="absolute right-4 mt-2 flex flex-wrap max-w-[420px] lg:max-w-[500px]">
    <div class="flex flex-wrap">
      <div class="w-[calc(100%-50px)] lg:w-[calc(100%-55px)]">
        <p class="text-xs lg:text-sm leading-4 text-right pr-3">Website design provided by <a href="https://www.gammaspace.ca/">Gamma Space</a>, a cooperative studio of game developers, artists, and creative technologists dedicated to exploring community-led flows of individual and collective support.</p>
      </div>
      <div class="text-black w-[50px] lg:w-[55px] h-auto mt-1 lg:mt-2">
        {@html gamma_burst_black}
      </div>  
    </div>
  </div>
</footer>