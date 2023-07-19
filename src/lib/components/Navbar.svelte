<script lang='ts'>
    import { toggled, scrolled } from "../../stores";
    import { page } from "$app/stores";
    import Icon from '@iconify/svelte';
    import Bolscher from "$lib/bolscher.svelte";
    import BolscherBg from "$lib/bolscherBG.svelte";
    import { fly } from "svelte/transition";

    let width: number;

    function toggleNav() {
        $toggled ? $toggled = false : $toggled = true;
    }

    function handleResize() {
        if (width <= 768) { $toggled = false}
    }

</script>
<header class='w-full bg-alpha'>
    <nav class='h-24 flex justify-between relative w-full font-semibold box-border max-w-[80rem] mx-auto'>
        <div id='logo' class='flex items-center justify-center relative pl-6 pr-10 py-8 z-30'>
            <div class='w-full absolute top-0 left-1/2 -translate-x-1/2 transition-all {$scrolled ? '-translate-y-full' : ''}'>
                <BolscherBg />
            </div>
            <a href="/" class='w-[8.75rem] relative h-6 transition-all {$scrolled ? 'text-white' : 'text-alpha'}'>
                <Bolscher />
            </a>

        </div>
        <ul class='hidden lg:flex flex-row gap-4 text-white z-30 items-center font-light justify-center'>
            <li class='px-4 py-4' class:active={$page.url.pathname === '/'}>
                <a href='/' >Home</a>
            </li>
            <li class='px-4 py-4'  class:active={$page.url.pathname === '/ons-verhaal'}>
                <a href='/ons-verhaal'>Ons verhaal</a>
            </li>
            <li class='px-4 py-4' class:active={$page.url.pathname === '/team'}>
                <a href='/team' >Team</a>
            </li>
            <li class='px-4 py-4' class:active={$page.url.pathname === '/contact'}>
                <a href='/contact' >Contact</a>
            </li>
        </ul>
        <div class='hidden lg:flex flex-row items-center justify-center font-light'>
            <button class='bg-white rounded-full mx-2 py-4 px-12 text-alpha border-2 border-white'>
                <a href='http://ebestel.bolscher.nl/'>Direct bestellen</a>
            </button>
            <button class='bg-transparent rounded-full mx-2 py-4 px-12 text-white border-2 border-white'>
                <a href='https://www.proefdeperfectie.nl/?utm_source=Bolscher.nl&utm_medium=Site+Bolscher'>Particulier</a>
            </button>
        </div>
        <!-- Mobile -->
        <button title="Menu" class="bg-transparent flex lg:hidden items-center relative justify-end mr-6 w-1/3 z-30" type="button" on:click={toggleNav}>
            <div id="menu-toggle" class={$toggled ? 'toggled' : ''}>
                <div id="icon" class="relative h-[0.2rem] w-[1.8rem] transition-all duration-200 before:bg-white after:bg-white {$toggled ? 'bg-transparent after:rotate-45 before:-rotate-45' : 'bg-white'}"/>
            </div>
        </button>
    </nav>
    {#if $toggled}
    <div id='top' class='h-[83dvh] w-full z-20 absolute top-0' in:fly={{ duration: 500, y: -1000}} out:fly={{ duration: 1000, y: -1000 }}>
        <div class='h-[80dvh] pt-40 pb-8 px-4 w-full bg-accent flex flex-col justify-between'>
            <ul class='text-white text-3xl flex flex-col'>
                <li class='px-4 py-2'>
                    <a href='/' on:click={toggleNav} class:active={$page.url.pathname === '/'}>Home</a>
                </li>
                <li class='px-4 py-2'>
                    <a href='/ons-verhaal' on:click={toggleNav} class:active={$page.url.pathname === '/ons-verhaal'}>Ons verhaal</a>
                </li>
                <li class='px-4 py-2'>
                    <a href='/team' on:click={toggleNav} class:active={$page.url.pathname === '/team'}>Team</a>
                </li>
                <li class='px-4 py-2'>
                    <a href='/contact' on:click={toggleNav} class:active={$page.url.pathname === '/contact'}>Contact</a>
                </li>
            </ul>
            <div class='flex flex-col gap-4'>
                <button class='bg-white rounded-full mx-4 p-4 text-alpha border-2 border-white'>
                    <a href='http://ebestel.bolscher.nl/'>Direct bestellen</a>
                </button>
                <button class='bg-transparent rounded-full mx-4 p-4 text-white border-2 border-white'>
                    <a href='https://www.proefdeperfectie.nl/?utm_source=Bolscher.nl&utm_medium=Site+Bolscher'>Particulier</a>
                </button>
            </div>

        </div>
        <div id='ellipse' class='h-[3dvh] w-full bg-accent' />
    </div>
    <div id='bottom' class='h-[20dvh] w-full z-10 bg-alpha absolute bottom-0 flex flex-row p-4 justify-between' in:fly={{ duration: 500, y: 200}} out:fly={{ duration: 1000, y: 200 }}>
        <article class='flex flex-col h-full justify-center gap-2'>
            <h4 class='text-white/60 text-sm'>Telefoon</h4>
            <a href='tel:+31534800100' class='text-white'>+31 (0)53 4800 100</a>
        </article>
        <article class='flex flex-col h-full justify-center gap-2'>
            <h4 class='text-white/60 text-sm'>Social Media</h4>
            <div class='flex flex-row gap-4'>
                <a href='https://www.instagram.com/bolscher.nl/' type='button' class='h-8 w-8 m-0 text-white'>
                    <iconify-icon icon="mdi:instagram" width="32" height="32"></iconify-icon>
                </a>
                <a href='/' type='button' class='h-8 w-8 m-0 text-white'>
                    <iconify-icon icon="mdi:facebook" width="32" height="32"></iconify-icon>
                </a>
                <a href='https://www.linkedin.com/company/bolscher-meer-dan-vlees/' type='button' class='h-8 w-8 m-0 text-white'>
                    <iconify-icon icon="mdi:linkedin" width="32" height="32"></iconify-icon>
                </a>
            </div>
        </article>    
    </div>
    {/if}
</header>

<style>
    #ellipse {
        clip-path: ellipse(50% 60% at 50% 0%);
    }

    .active {
        border-bottom: 2px solid white;
    }
</style>
<svelte:window bind:innerWidth={width} on:resize={handleResize}/>