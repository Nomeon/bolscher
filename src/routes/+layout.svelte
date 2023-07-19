<script lang='ts'>
    import Navbar from "$lib/components/Navbar.svelte";
    import ClipPath from "$lib/components/clipPath.svelte";
    import { scrolled } from "../stores";
    import { onMount, tick } from "svelte";
    import { page } from "$app/stores";
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";

    let box: any;

    onMount(() => {
        box = document.getElementById('scrollable');
    })

    function scroll() {
        box.scrollTop ? $scrolled = true : $scrolled = false;
    }

    function scrollToTop() {
        if (box) {
            box.scrollTop = 0;
        }
    }

    $: $page.route.id && scrollToTop();

</script>

<Navbar />
<main id='scrollable' class='h-[calc(100dvh-6rem)] overflow-y-scroll overflow-x-hidden bg-beta' on:scroll={scroll}>
    <slot />
    <Footer />
</main>
<ClipPath />