<script>

    import TeamSpeler from "$lib/components/TeamSpeler.svelte";

</script>
<div id='blob1' class='text-white h-[55dvh] mb-4'>
    <div class='h-full w-full backdrop-brightness-75 p-8 pt-16 flex flex-col gap-4'>
        <h1 class='text-4xl'>Team</h1>
        <p>Een familiebedrijf met 100 medewerkers die maar 1 doel voor ogen hebben, het leveren van de mooiste producten voor u als professional. Met de beste selectie van vlees uit de hele wereld weten wij u steeds weer te verrassen met ons brede aanbod. Uiteraard bereid of bewerkt door ons team gediplomeerde slagers en koks. </p>
        <div class='flex flex-col mb-16'>
            <button class='bg-white rounded-full mx-4 p-4 text-alpha border-2 border-white'>
                <a href='/contact'>Contact</a>
            </button>
        </div>
    </div>
</div>
<h2 class='text-alpha text-2xl font-semibold p-8'>Ons team</h2>
<div class='grid grid-cols-2 gap-4 px-2'>
    <TeamSpeler naam='Roy Bolscher' functie='Directie' email='roy@bolscher.nl' phone='+316'/>
    <TeamSpeler naam='Roy Bolscher' functie='Directie' email='roy@bolscher.nl' phone='+316'/>
    <TeamSpeler naam='Roy Bolscher' functie='Directie' email='roy@bolscher.nl' phone='+316'/>
    <TeamSpeler naam='Roy Bolscher' functie='Directie' email='roy@bolscher.nl' phone='+316'/>
    <TeamSpeler naam='Roy Bolscher' functie='Directie' email='roy@bolscher.nl' phone='+316'/>
    <TeamSpeler naam='Roy Bolscher' functie='Directie' email='roy@bolscher.nl' phone='+316'/>
</div>


<style>
    #blob1 {
        clip-path: url(#backgroundRectangleSm);
        background-image: url("/images/team.webp");
        background-size: cover;
        background-position: center;
    }
</style>