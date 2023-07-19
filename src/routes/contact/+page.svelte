<script lang='ts'>
    let naam: string;
    let bedrijf: string;
    let email: string;
    let telefoonnummer: string;
    let bericht: string;
</script>

<div id='blob' class='bg-zeta'>
    <form class='flex flex-col gap-8 px-8 pt-16 pb-32 justify-start text-alpha'>
        <h1 class='text-4xl text-white'>Contact</h1>
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
<div class='-translate-y-24 flex justify-end '>
    <img id='blob2' src='/images/bolscherBestelling.webp' alt='Hoofdpagina vlees' class='aspect-square object-cover align-middle w-5/6'/>
</div>
<article class='px-4 flex flex-col gap-4 mb-16'>
    <h2 class='text-2xl mb-4 pb-3 border-b border-alpha'>Bolscher</h2>
    <div class=''>
        <div class=''>
            <p>Bolscher B.V.</p>
            <a href='tel:+31534800100'>+31 (0)53 4800 100</a>
        </div>
        <div class=''>
            <p>Strootsweg 40</p>
        </div>
        <div class=''>
            <p>7547 RW Enschede</p>
        </div>
    </div>
    <ul>
        <li>Bank ING 65.23.13.264</li>
        <li>BTW nr. NL 80.88.76.715.B.01</li>
        <li>K.v.K. Enschede nr. 08089529</li>
        <li>IBAN nummer: NL28INGB0652313264</li>
        <li>BIC code INGBNL2A</li>
    </ul>
</article>
<article class='px-4 flex flex-col gap-4 mb-16'>
    <h2 class='text-2xl mb-4 pb-3 border-b border-alpha'>Openingstijden</h2>
    <ul>
        <li>Maandag: 08.00 - 17.00</li>
        <li>Dinsdag: 08.00 - 17.00</li>
        <li>Woensdag: 08.00 - 17.00</li>
        <li>Donderdag: 08.00 - 17.00</li>
        <li>Vrijdag: 08.00 - 17.00</li>
        <li>Zaterdag: 08.00 - 13.00</li>
    </ul>
</article>

<style>
    #blob {
        clip-path: url(#backgroundDecoBlobSm);
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