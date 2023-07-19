<script>
    import TeamSpeler from "$lib/components/TeamSpeler.svelte";
</script>

<div id='blob1' class='text-white h-[55dvh] mb-4'>
    <div class='h-full w-full backdrop-brightness-75 p-8 pt-16 flex flex-col gap-4'>
        <h1 class='text-4xl'>Team</h1>
        <p class='font-light'>Een familiebedrijf met 100 medewerkers die maar 1 doel voor ogen hebben, het leveren van de mooiste producten voor u als professional. Met de beste selectie van vlees uit de hele wereld weten wij u steeds weer te verrassen met ons brede aanbod. Uiteraard bereid of bewerkt door ons team gediplomeerde slagers en koks. </p>
        <div class='flex flex-col mb-16'>
            <button class='bg-white rounded-full mx-4 p-4 text-alpha border-2 border-white'>
                <a href='/contact'>Contact</a>
            </button>
        </div>
    </div>
</div>
<h2 class='text-alpha text-3xl  p-8'>Ons team</h2>
<div class='grid grid-cols-2 gap-4 px-2 mb-8'>
    <TeamSpeler naam='Roy Bolscher' functie='Directie' email='roy@bolscher.nl' phone='+316' image='/images/roy.webp'/>
    <TeamSpeler naam='Chiel Bolscher' functie='Directie' email='chiel@bolscher.nl' phone='+316' image='/images/chiel.webp'/>
    <TeamSpeler naam='Niels Voorhuis' functie='Verkoop Buitendienst' email='niels@bolscher.nl' phone='+316' image='/images/niels.webp'/>
    <TeamSpeler naam='Mattijs Kappen' functie='Verkoop Buitendienst' email='mattijs@bolscher.nl' phone='+316' image='/images/mattijs.webp'/>
    <TeamSpeler naam='Niek Wolters' functie='Hoofd Verkoop Binnendienst' email='niek@bolscher.nl' phone='+316' image='/images/niels.webp'/>
    <TeamSpeler naam='Peter Kromkamp' functie='Hoofd Financiële Administratie' email='Peter@bolscher.nl' phone='+316' image='/images/peter.webp'/>
    <TeamSpeler naam='Maarten Blank' functie='Financiële Administratie' email='niek@bolscher.nl' phone='+316' image='/images/maarten.webp'/>
    <TeamSpeler naam='Marijke Lenderink' functie='P&O Adviseur' email='marijke@bolscher.nl' phone='+316' image='/images/marijke.webp'/>
</div>


<style>
    #blob1 {
        clip-path: url(#backgroundRectangleSm);
        background-image: url("/images/team.webp");
        background-size: cover;
        background-position: center;
    }
</style>