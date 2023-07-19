<script>
    import Bolscher from "$lib/bolscher.svelte";
</script>

<footer class='bg-alpha flex flex-col gap-12 pb-12 lg:flex-row lg:pt-24 lg:px-24 lg:justify-between'>
    <div id='logo' class='flex items-center justify-start relative pl-4 pr-10 pt-8 lg:pl-0'>
        <a href="/" class='w-[8.75rem] h-6 text-white lg:h-12 lg:w-[17.5rem]'>
            <Bolscher />
        </a>
    </div>
    <div class='flex flex-col gap-12'>
        <div class='flex flex-col lg:flex-row gap-12 lg:justify-between'>
            <article class='flex flex-col h-full justify-center gap-2 px-4 lg:justify-start'>
                <h4 class='text-white/60 text-sm'>Adres</h4>
                <p class='text-white'>Strootsweg 40</p>
                <p class='text-white'>7547 RW Enschede</p>
            </article>
            <article class='flex flex-col h-full justify-center gap-2 px-4 lg:justify-start'>
                <h4 class='text-white/60 text-sm'>Telefoon</h4>
                <a href='tel:+31534800100' class='text-white'>+31 (0)53 4800 100</a>
            </article>
            <article class='flex flex-col h-full justify-center gap-2 px-4 lg:justify-start'>
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
        <div class='flex flex-col lg:flex-row text-white px-4 gap-8 text-sm'>
            <a href='/'>Algemene voorwaarden</a>
            <a href='/'>Privacy statement</a>
            <p class=''>© 2022 Bolscher. Alle rechten voorbehouden</p>
        </div>
    </div>
    
</footer>