<script lang='ts'>
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css/core';
</script>

<div id='blob1' class='p-8 pt-16 flex flex-col gap-4 h-[50dvh] bg-gamma text-white'>
    <h1 class='text-4xl font'>Niet meer vlees, maar beter vlees.</h1>
    <p class='font-light'>Volhoudbaar eten consumeren moet het nieuwe normaal gaan worden.</p>
</div>
<div class='-translate-y-32 flex justify-end '>
    <img id='blob2' src='/images/mainVlees.webp' alt='Hoofdpagina vlees' class='aspect-square object-cover align-middle w-5/6 '/>
</div>
<div class='p-8 flex flex-col gap-4'>
    <h2 class='text-alpha text-2xl font-semibold'>Een trots familiebedrijf uit het oosten.</h2>
    <p class='font-light'>Bolscher is een familiebedrijf. De broers Roy en Chiel Bolscher, uit Enter in Overijssel, namen het bedrijf over van hun vader Harry. In 1978 legde deze Bolscher senior de basis voor het vleesbedrijf dat nu is uitgegroeid tot een in de regio bekende naam, waarbij je meteen denkt aan service en kwaliteit.</p>
</div>
<div class='relative w-[150dvw] mb-8'>
    <Splide options={ { type: 'loop' } } hasTrack={ false } aria-label="Bolscher Carousel" >
        <div class="splide__arrows flex flex-row relative top-8 left-16 z-20 gap-4">
            <button class="splide__arrow splide__arrow--prev h-20 w-20 rounded-full bg-white shadow-lg shadow-black/10 flex items-center justify-center">
                <iconify-icon icon="mingcute:left-fill" width="30" height="30"></iconify-icon>
            </button>
            <button class="splide__arrow splide__arrow--next h-20 w-20 rounded-full bg-white shadow-lg shadow-black/10 flex items-center justify-center">
                <iconify-icon icon="mingcute:right-fill" width="30" height="30"></iconify-icon>
            </button>
        </div>
        <div id='image-slider' class='h-96'>
            <SplideTrack >
                <SplideSlide class='h-96'>
                    <img src='/images/bolscherGebouw.webp' alt='Carousel 1' class='align-middle object-cover h-full'/>
                </SplideSlide >
                <SplideSlide class='h-96'>
                    <img src='/images/bolscherMeeting.webp' alt='Carousel 2' class='align-middle object-cover h-full'/>
                </SplideSlide>
                <SplideSlide class='h-96'>
                    <img src='/images/bolscherVlees.webp' alt='Carousel 3' class='align-middle object-cover h-full'/>
                </SplideSlide>
            </SplideTrack>
        </div>
    </Splide>
</div>
<div class='bg-delta text-white flex flex-col p-4 pt-48' id='blob3'>
    <h2 class='text-3xl mb-2'>Laten zien dat het anders kan.</h2>
    <p class='font-light'>De broers Bolscher zijn avontuurlijke en toch ook verzorgende ontdekkers. Dat gaat goed samen! Ze vinden het vleesbedrijf opnieuw uit.</p>
    <h3 class='mt-6'>Harry's Farm</h3>
    <p class='font-light'>Vanuit hun boerderij, <a href='https://www.harrys.farm/' class='underline'>Harry's Farm</a>, beheren de boeren, samen met bedrijven, instellingen en particulieren uit de buurt, het natuurgebied Enters Reggedal. Met een grote rol weggelegd voor de Black & Red Angus runderen die het gebied onderhouden. Zij worden met respect voor de natuur grootgebracht en door natuurlijk verloop geschikt gemaakt voor vleesproductie op kleine schaal. Vlees van dieren die goed gevoed en respectvol behandeld zijn, heeft naast een voortreffelijke smaak op je bord, geen bittere nasmaak.</p>
    <h3 class='mt-6'>Bolscher loopt niet weg, maar staat vooraan.</h3>
    <p class='font-light'>De vleesindustrie heeft te maken met grote milieu thema's. Bolscher wil niet achteraan sluiten in de rij, maar een leidende rol spelen om de CO₂-uitstoot zoveel mogelijk terug te dringen. Daarom houden we ons ook actief bezig met het ontwikkelen van nieuwe circulaire, “minder vlees” concepten en initiatieven voor kleinschalige regionale vleesproductie. </p>
    <p class='font-light'>Een paar mooie praktijk voorbeelden; de administratie is nagenoeg papierloos, verpakkingen recyclebaar en stroom wordt door 1.500 zonnepanelen opgewekt. Daarnaast verkennen zij nieuwe manieren van vlees eten. Bijvoorbeeld door het ontwikkelen van burgers die naast vlees ook 50% groenten bevatten. </p>
    <h3 class='mt-6'>Graag samenwerken?</h3>
    <p class='mb-12 font-light'>Benieuwd wat we voor u kunnen betekenen? Neem dan contact op met ons team!</p>
    <button class='bg-white rounded-full mx-4 p-4 text-alpha border-2 border-white'>
        <a href='/team'>Maak kennis met onze specialisten</a>
    </button>
</div>
<div class='bg-delta grid grid-cols-3 pt-12 -mb-12'>
    <div id='specialistBlob' class='w-[150%]'>
        <img  src='/images/specialist1.jpg' alt='Medewerker 1' class='object-cover align-middle w-full h-full'/>
    </div>
    <div id='specialistBlob' class='w-[150%]'>
        <img  src='/images/specialist2.jpg' alt='Medewerker 1' class='object-cover align-middle w-full h-full'/>
    </div>
    <div id='specialistBlob' class='w-[150%]'>
        <img  src='/images/specialist3.jpg' alt='Medewerker 1' class='object-cover align-middle w-full h-full'/>
    </div>
</div>

<style lang='postcss'>
    #blob1 {
        clip-path: url(#backgroundDecoBlobSm)
    }
    #blob2 {
        clip-path: url(#backgroundBlob)
    }
    #image-slider {
        clip-path: url(#squircle-long)
    }
    #blob3 {
        clip-path: url(#roundedBgOneSide);
    }
    #specialistBlob {
        clip-path: url(#blobSm);
        aspect-ratio: 160/136;
        transform: translate3d(-15%,0,0);
    }
</style>