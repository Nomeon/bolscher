<script lang='ts'>
    let naam: string;
    let bedrijf: string;
    let email: string;
    let telefoonnummer: string;
    let bericht: string;
</script>

<div class='lg:flex lg:flex-row lg:w-full lg:relative lg:h-full lg:mb-48'>
    <div id='blob' class='bg-zeta lg:w-[60%] lg:absolute lg:left-0 lg:h-auto'>
        <form class='flex flex-col gap-8 px-8 pt-16 pb-32 justify-start text-alpha lg:w-[80%] lg:pl-48'>
            <h1 class='text-4xl lg:text-6xl text-white'>Contact</h1>
            <div id='floating-label-group' class='relative mt-4'>
                <input class='text-alpha bg-transparent border-b border-alpha/30 focus:outline-none w-full' type='text' name='Naam' placeholder=' ' bind:value={naam} required />
                <label id='floating-label' class='text-alpha/60 text-sm' for='Naam'>Naam</label>
            </div>
            <div id='floating-label-group' class='relative mt-4'>
                <input class='text-alpha bg-transparent border-b border-alpha/30 focus:outline-none w-full' type='text' name='Bedrijf' placeholder=' ' bind:value={bedrijf} />
                <label id='floating-label' class='text-alpha/60 text-sm' for='Bedrijf'>Bedrijf (optioneel)</label>
            </div>
            <div id='floating-label-group' class='relative mt-4'>
                <input class='text-alpha bg-transparent border-b border-alpha/30 focus:outline-none w-full' type='email' name='email' placeholder=' ' bind:value={email} required />
                <label id='floating-label' class='text-alpha/60 text-sm' for='email'>E-mailadres</label>
            </div>
            <div id='floating-label-group' class='relative mt-4'>
                <input class='text-alpha bg-transparent border-b border-alpha/30 focus:outline-none w-full' type='tel' name='telefoonnummer' placeholder=' ' bind:value={telefoonnummer} required />
                <label id='floating-label' class='text-alpha/60 text-sm' for='telefoonnummer'>Telefoonnummer</label>
            </div>
            <div id='floating-label-group' class='relative mt-4'>
                <textarea class='text-alpha bg-transparent border-b border-alpha/30 focus:outline-none w-full' name='bericht' placeholder=' ' bind:value={bericht} required></textarea>
                <label id='floating-label' class='text-alpha/60 text-sm' for='bericht'>Vraag/opmerking</label>
            </div>
            <button type='submit' class='bg-white rounded-full p-4 text-alpha border-2 border-white w-1/2'>Versturen</button>
        </form>
    </div>
    <div class='-translate-y-24 flex justify-end lg:w-[50%] lg:self-end lg:absolute lg:right-0 lg:top-0 lg:-translate-y-0'>
        <img id='blob2' src='/images/bolscherBestelling.webp' alt='Hoofdpagina vlees' class='aspect-square object-cover align-middle w-5/6 lg:w-full'/>
    </div>
</div>
<div class='flex flex-col lg:flex-row justify-center lg:gap-24 lg:mb-16'>
    <article class='px-4 flex flex-col gap-4 mb-16 lg:flex-row'>
        <div class='flex flex-col'>
            <h2 class='text-2xl lg:text-4xl mb-4 pb-3 border-b border-alpha'>Bolscher</h2>
            <div class='flex flex-col lg:flex-row lg:gap-24'>
                <div>
                    <div>
                        <p>Bolscher B.V.</p>
                        <a href='tel:+31534800100'>+31 (0)53 4800 100</a>
                    </div>
                    <div>
                        <p>Strootsweg 40</p>
                    </div>
                    <div>
                        <p>7547 RW Enschede</p>
                    </div>
                    <br/>
                </div>
                <ul class='flex flex-col'>
                    <li class='flex flex-row'>Bank:<p class='font-light'>&nbsp;ING 65.23.13.264</p></li>
                    <li class='flex flex-row'>BTW nr:<p class='font-light'>&nbsp;NL 80.88.76.715.B.01</p></li>
                    <li class='flex flex-row'>K.v.K Enschede nr:<p class='font-light'>&nbsp;08089529</p></li>
                    <li class='flex flex-row'>IBAN nummer:<p class='font-light'>&nbsp;NL28INGB0652313264</p></li>
                    <li class='flex flex-row'>BIC code:<p class='font-light'>&nbsp;INGBNL2A</p></li>
                </ul>
            </div>
        </div>
    </article>
    <article class='px-4 flex flex-col gap-4 mb-16'>
        <h2 class='text-2xl lg:text-4xl mb-4 pb-3 border-b border-alpha'>Openingstijden</h2>
        <ul class=''>
            <li class='font-light flex flex-row lg:grid lg:grid-cols-2 gap-4'><p class='font-normal'>Maandag:</p><p class='place-self-end'>08.00 - 17.00</p></li>
            <li class='font-light flex flex-row lg:grid lg:grid-cols-2 gap-4'><p class='font-normal'>Dinsdag:</p><p class='place-self-end'>08.00 - 17.00</p></li>
            <li class='font-light flex flex-row lg:grid lg:grid-cols-2 gap-4'><p class='font-normal'>Woensdag:</p><p class='place-self-end'>08.00 - 17.00</p></li>
            <li class='font-light flex flex-row lg:grid lg:grid-cols-2 gap-4'><p class='font-normal'>Donderdag:</p><p class='place-self-end'>08.00 - 17.00</p></li>
            <li class='font-light flex flex-row lg:grid lg:grid-cols-2 gap-4'><p class='font-normal'>Vrijdag:</p><p class='place-self-end'>08.00 - 17.00</p></li>
            <li class='font-light flex flex-row lg:grid lg:grid-cols-2 gap-4'><p class='font-normal'>Zaterdag:</p><p class='place-self-end'>08.00 - 13.00</p></li>
        </ul>
    </article>
</div>


<style>
    @media only screen and (min-width: 1024px) {
        #blob {
            clip-path: url(#backgroundDecoBlob);
        }
    }
    @media only screen and (max-width: 1024px) {
        #blob {
            clip-path: url(#backgroundDecoBlobSm);
        }
    }

    #blob2 {
        clip-path: url(#backgroundBlob);
    }

    #floating-label {
        position: absolute;
        pointer-events: none;
        top: 0;
        left: 0.5rem;
        transition: all 0.2s ease;
    }

    input:focus ~ #floating-label,
    textarea:focus ~ #floating-label,
    input:not(:placeholder-shown) ~ #floating-label,
    textarea:not(:placeholder-shown) ~ #floating-label {
        top: -1rem;
        bottom: 0;
        left: 0;
        font-size: 0.7rem;
        opacity: 1;
        color: #404040;
    }
</style>