<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<Header />
<div class="relative { $page.url.pathname != "/" ? "mt-16" : "mt-24"} md:mt-12 px-8 md:px-12 mx-auto max-w-screen-xl">
  <slot />
</div>
<Footer />