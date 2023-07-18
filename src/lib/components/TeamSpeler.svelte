<script lang='ts'>
    export let naam: string;
    export let functie: string;
    export let email: string;
    export let phone: string;
    export let image: string;
    
</script>
<div class='mb-8 w-full h-full flex flex-col items-center'>
    <div id='card' class='relative flex flex-col items-center justify-center bg-white pb-12'>
        <div id='image' class='m-6'>
            <img src={image} alt='{naam}' class='w-full aspect-square object-cover' />
        </div>
        <h3 class='text-xl'>{naam}</h3>
        <h4 class='text-card text-center text-sm px-2'>{functie}</h4>
        
    </div>
    <div id='contact' class='flex bg-card pt-4 pb-2 -mt-8 w-1/2 gap-2 items-center justify-center'>
        <a href='tel:{phone}'><iconify-icon icon="mdi:phone" width="24"></iconify-icon></a>
        <a href='mailto:{email}'><iconify-icon icon="tabler:mail-filled" width="24"></iconify-icon></a>
    </div>
</div>


<style>
    #card {
        clip-path: url(#cardBg);
    }
    #image {
        clip-path: url(#cardSquircle);
    }
    #contact {
        clip-path: url(#cardDetailBg);
    }
</style>