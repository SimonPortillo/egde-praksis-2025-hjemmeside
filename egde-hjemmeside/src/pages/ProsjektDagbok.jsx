import './Status1.css';

const statusUpdates = [
        { title: 'Uke 34, Oppstart', desc: 'Vi startet praksisperioden med en arbeidsdag fra kl. 08:00 til 16:00. Dagen begynte med en omvisning på kontoret, en introduksjon  og praktisk informasjon. Resten av dagen ble brukt til å bli kjent med kontoret, delta i ulike møter og få innsikt i arbeidsmetodene. Vi ble enige om at vi skulle møte på kontoret hver tirsdag og onsdag.\n\n Vi brukte også tid på å sette opp EgdeAI prosjektet på våre datamaskiner, siden dette verktøyet kommer til å være sentralt i praksisperioden. Installasjonen ble gjort både selvstendig og i samarbeid med veileder. I løpet av dagen hadde vi møter med flere personer i bedriften.\n\n Mot slutten av dagen ble vi enige om at vi skal få utdelt konkrete oppgaver til neste uke. Vi snakket kort om muligheten for å utvikle en funksjon som kan endre språk i EgdeAI' },
        { title: 'Uke 35, Internasjonalisering; EgdeAI', desc: 'Denne uken var Ida syk, så det var bare Simon som var i praksis denne uken.\n\nSimon satte seg inn i next.js og EgdeAI. Lærte om Internationalization (I18n) og Localization (L10n). Satt opp prosjektet til å støtte flere språk (Internationalization). Begynte smått på Localization, altså å faktisk implemetere et eller flere språk, i vårt tilfelle så var det engelsk. Dette innebærer å lage en slags ordliste i JSON format for å så hente meldingen inn i relevante komponenter, via en hook. Senere på dagen hadde også et møte for å diskutere en til oppgave med Velox-teamet, Ideen å lage et component registry i henhold til shadcn sin dokumentasjon.' },
        { title: 'Uke 36, Komponentbibliotek; Egd-UI og ferdigstilling av i18n', desc: 'Fortsettelse på Localization. Dette utføres en komponent av gangen, med testing av alle steder som inneholder variabel tekst. Dette betyr blant annet å måtte fremprovosere feil, for å se feilmeldinger. Dette innebærer i tilfeller å måtte mocke eksiterende funskjoner for å forårsake feil.\n\n Tirsdagen startet med introduksjon av et nytt prosjekt fra Velox-teamet (desingteamet i egde). Hovedfokuset i prosjektet er å sammenligne et register med ulike designmaler mot et ferdig definert figmadesign, og kontrollere at de samsvarer. Dersom det oppdages avvik, som feil font eller farger, skal dette korrigeres slik at designet følger retningslinjene.\n\n Prosjektet består av mange ulike oppgaver, og Ida har begynt å jobbe med disse. Hun vil fortsette arbeidet i kommende uke. I tillegg hadde Ida et møte med Philip og Kathrine for å få mer informasjon om prosjektet. Sammen med en annen student ved kontoret i Porsgrunn.' },
        { title: 'Uke 37, Komponentbiblioteket', desc: 'Denne uken har vi fortsatt arbeidet med Velox-prosjektet. Vi har hatt hver våre arbeidsoppgaver innen prosjektet, som har bestått i å oppdatere eller legge til ulike sider slik at de samsvarer med designmalene i Figma. Vi hadde et kort møte med Philip (utvikler) for å bli enige om strukturen på kodeoppsettet slik at det ser likt ut når det blir lastet opp i main repository. '},
        { title: 'Uke 38, Komponentbiblioteket og Techpoint', desc: 'I uke 38 har vi arbeidet med det samme prosjektet Velox som i uke 37. Vi hadde kun en dag på kontoret grunnet techpoint konferansen på kilden. Grunnet techpoint arbeidet vi hjemmefra en halv dag med det samme prosjektet.' },
        { title: 'Uke 39-46, Komponentbiblioteket', desc: 'I løpet av praksisperioden har vi jobbet kontinuerlig med det samme prosjektet Velox knyttet til komponentbiblioteket. Biblioteket inneholder over 50 komponenter som enten skal oppdateres eller videreutvikles med flere varianter, noe som gjør at arbeidet med hver enkelt komponent kan være tidkrevende. Vi har jobbet individuelt ved å fordele komponenter mellom oss, fullført dem én og én, og deretter valgt nye komponenter å fortsette med.\n\n For å sikre god kvalitet på arbeidet har vi også gjennomført gjensidig kodegjennomgang, der vi har vurdert og forbedret hverandres komponenter. For hver komponent opprettet vi egne branches, og før de ble godkjent og lastet opp til hovedrepositoriet måtte vi kontrollere at alt fulgte standardene for prosjektet. Denne prosessen har gjort oss mer bevisste på struktur, samarbeid og kvalitet i utviklingsarbeidet. I tillegg har vi hatt ukentlige oppfølgingsmøter med veilederen vår på Teams, hvor vi har gjennomgått status, diskutert utfordringer og fått nyttige råd underveis.\n\n Noen av komponentene har vært mer krevende å arbeide med enn andre, både når det gjelder kode og design. Heldigvis har vi hatt god støtte rundt oss fra faglig sterke ressurser, som har veiledet oss på Teams når vi har stått fast. Denne støtten har vært svært nyttig og bidratt til at vi har kommet videre og lært mer underveis.'}
    ];

function ProsjektDagbok() {
  return (
           <div className="page-container fancy-status">
            <h1 className='page-title'>Prosjektdagbok</h1>
            {/* Timeline Section */}
            <section className="content-section">
                <h2 className="section-title">Samlet dagbok for Ida og Simon</h2>
                <ol className="timeline">
                    {statusUpdates.map((m, i) => (
                        <li key={i} className="timeline-item">
                            <div className="dot" />
                            <div className="content">
                                <h3>{m.title}</h3>
                                <p>{m.desc}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
  )
}

export default ProsjektDagbok
