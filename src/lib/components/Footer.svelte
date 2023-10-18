<script>
  import { gamma_burst_black } from "$lib/svg/svg";
  const curDate = new Date().getFullYear();
</script>

<footer class="relative bottom-0 max-w-screen-xl mx-auto px-8 pt-6">
  <div class="-ml-8 -mt-4 w-[calc(100%+64px)] md:-ml-12 md:mt-0 md:w-[calc(100%+80px)]">
    <img class="w-full h-full mx-auto object-cover" src="/img/footer_hr.png" />
  </div>
  <div class="absolute right-4 mt-2 flex flex-wrap max-w-[420px] lg:max-w-[500px]">
    <div class="flex flex-wrap">
      <div class="w-[calc(100%-50px)] lg:w-[calc(100%-55px)]">
        <p class="text-xs lg:text-sm leading-4 text-right pr-3">Website design provided by <a href="https://www.gammaspace.ca/">Gamma Space</a>, a cooperative studio of game developers, artists and creative technologists dedicated to exploring community-led flows of individual and collective support.</p>
      </div>
      <div class="text-black w-[50px] lg:w-[55px] h-auto mt-1 lg:mt-2">
        {@html gamma_burst_black}
      </div>  
    </div>
  </div>
</footer>