<script lang='ts'>
    import { name } from "../../../stores";
</script>

<div class='w-full flex flex-col mt-24 mb-24 gap-8 items-center justify-center p-8 text-center'>
    {#if $name}
        <h1 class='text-4xl'>Dankjewel {$name}!</h1>
    {:else}
        <h1 class='text-4xl'>Dankjewel!</h1>
    {/if}
    <p>Je bericht is succesvol verzonden. We nemen zo snel mogelijk contact met je op.</p>
    <a href='/' class='bg-white rounded-full p-4 text-alpha border-2 border-white flex justify-center items-center gap-2'><iconify-icon icon="mdi:arrow-left" width="24" height="24"></iconify-icon>Terug naar home</a>
</div>