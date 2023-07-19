<script>
    import TeamSpeler from "$lib/components/TeamSpeler.svelte";
</script>

<div id='blob1' class='flex flex-col gap-4 h-[60dvh] lg:h-[75dvh] w-full bg-gamma text-white bg-cover bg-center'>
    <div class='h-full w-full backdrop-brightness-75 lg:flex justify-start items-start lg:justify-center lg:items-center'>
        <div class='p-8 pt-16 lg:pb-24 lg:w-1/2'>
            <h1 class='text-4xl lg:text-6xl lg:mb-4'>Team</h1>
            <p>Een familiebedrijf met 100 medewerkers die maar 1 doel voor ogen hebben, het leveren van de mooiste producten voor u als professional. Met de beste selectie van vlees uit de hele wereld weten wij u steeds weer te verrassen met ons brede aanbod. Uiteraard bereid of bewerkt door ons team gediplomeerde slagers en koks. </p>
            <div class='flex flex-col pt-8 gap-4 lg:flex-row'>
                <a href='/contact' class='text-center bg-white rounded-full py-4 px-12 text-alpha border-2 border-white hover:bg-white/90 hover:border-white/0'>Contact</a>
            </div>
        </div>
    </div>
</div>

<div class='grid grid-cols-2 gap-4 px-2 mb-8 lg:grid-cols-3 place-items-center lg:max-w-[80rem] m-auto'>
    <h2 class='text-alpha text-3xl p-8 place-self-start lg:col-span-3 col-span-2 lg:text-4xl lg:pl-24'>Ons team</h2>
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
    @media only screen and (min-width: 1024px) {
        #blob1 {
            clip-path: url(#backgroundRectangle);
            background-image: url("/images/team.webp");
        }
    }
    @media only screen and (max-width: 1024px) {
        #blob1 {
            clip-path: url(#backgroundRectangleSm);
            background-image: url("/images/team.webp");
        }
    }
</style>