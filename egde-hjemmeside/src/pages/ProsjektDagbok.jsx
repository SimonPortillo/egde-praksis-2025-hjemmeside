import './Status1.css';

const statusUpdates = [
    { title: 'Uke 34, Oppstart', desc: 'Vi startet praksisperioden med en arbeidsdag fra kl. 08:00 til 16:00. Dagen begynte med en omvisning på kontoret, en introduksjon  og praktisk informasjon. Resten av dagen ble brukt til å bli kjent med kontoret, delta i ulike møter og få innsikt i arbeidsmetodene. Vi ble enige om at vi skulle møte på kontoret hver tirsdag og onsdag.\n\n Vi brukte også tid på å sette opp EgdeAI prosjektet på våre datamaskiner, siden dette verktøyet kommer til å være sentralt i praksisperioden. Installasjonen ble gjort både selvstendig og i samarbeid med veileder. I løpet av dagen hadde vi møter med flere personer i bedriften.\n\n Mot slutten av dagen ble vi enige om at vi skal få utdelt konkrete oppgaver til neste uke. Vi snakket kort om muligheten for å utvikle en funksjon som kan endre språk i EgdeAI', highlight: '' },
    { title: 'Uke 35, Internasjonalisering; EgdeAI', desc: 'Denne uken var Ida syk, så det var bare Simon som var i praksis denne uken.\n\nSimon satte seg inn i next.js og EgdeAI. Lærte om Internationalization (I18n) og Localization (L10n). Satt opp prosjektet til å støtte flere språk (Internationalization). Begynte smått på Localization, altså å faktisk implemetere et eller flere språk, i vårt tilfelle så var det engelsk. Dette innebærer å lage en slags ordliste i JSON format for å så hente meldingen inn i relevante komponenter, via en hook. Senere på dagen hadde også et møte for å diskutere en til oppgave med Velox-teamet, Ideen å lage et component registry i henhold til shadcn sin dokumentasjon.', highlight: '' },
    { title: 'Uke 36, Komponentbibliotek; Egd-UI og ferdigstilling av språkfunksjon', desc: 'Fortsettelse på Localization. Dette utføres en komponent av gangen, med testing av alle steder som inneholder variabel tekst. Dette betyr blant annet å måtte fremprovosere feil, for å se feilmeldinger. Dette innebærer i tilfeller å måtte mocke eksiterende funskjoner for å forårsake feil.\n\n Tirsdagen startet med introduksjon av et nytt prosjekt fra Velox-teamet (desingteamet i egde). Hovedfokuset i prosjektet er å sammenligne et register med ulike designmaler mot et ferdig definert figmadesign, og kontrollere at de samsvarer. Dersom det oppdages avvik, som feil font eller farger, skal dette korrigeres slik at designet følger retningslinjene.\n\n Prosjektet består av mange ulike oppgaver, og Ida har begynt å jobbe med disse. Hun vil fortsette arbeidet i kommende uke. I tillegg hadde Ida et møte med Philip og Kathrine for å få mer informasjon om prosjektet. Sammen med en annen student ved kontoret i Porsgrunn.', highlight: '' },
    { title: 'Uke 37, Komponentbiblioteket', desc: 'Denne uken har vi fortsatt arbeidet med Velox-prosjektet. Vi har hatt hver våre arbeidsoppgaver innen prosjektet, som har bestått i å oppdatere eller legge til ulike sider slik at de samsvarer med designmalene i Figma. Vi hadde et kort møte med Philip (utvikler) for å bli enige om strukturen på kodeoppsettet slik at det ser likt ut når det blir lastet opp i main repository.', highlight: 'Komponenter: Button, Badge, Alert' },
    { title: 'Uke 38, Komponentbiblioteket og Techpoint', desc: 'I uke 38 har vi arbeidet med det samme prosjektet Velox som i uke 37. Vi hadde kun en dag på kontoret grunnet techpoint konferansen på kilden. Grunnet techpoint arbeidet vi hjemmefra en halv dag med det samme prosjektet.', highlight: 'Komponenter: Card, Separator, Button, Badge' },
    { title: 'Uke 39, Komponentbiblioteket', desc: 'Etter å ha jobbet med Velox-prosjektet i et par uker allerede, fortsatte vi denne uken med videreutvikling av komponentbiblioteket. Vi begynte å få en tydeligere forståelse av prosjektet, og fordelte komponenter mellom oss for å jobbe mer effektivt. Fokus var på å videreutvikle og forbedre eksisterende komponenter, samt sørge for at de fulgte designsippene. Vi hadde også et oppfølgingsmøte med veilederen vår for å diskutere fremdriften og planlegge de kommende ukene.', highlight: 'Komponenter: Dialog, Alert-dialog, Input, Badge' },
    { title: 'Uke 40 Komponentbiblioteket og "Code review"', desc: 'Denne uken jobbet vi videre med flere komponenter. Vi ble tryggere i teknologiene som brukes i prosjektet, som React, TypeScript og TailwindCSS, og begynte å finne effektive måter å strukturere koden på. Vi gjennomførte også våre første kodegjennomganger av hverandres arbeid, noe som hjalp oss å se nye måter å løse utfordringer på og gjorde oss mer autonome.', highlight: 'Komponenter: Tooltip, Progress, Table' },
    { title: 'Uke 41 Komponentbiblioteket', desc: 'Denne uken jobbet vi videre med komponentene. Vi jobbet mer systematisk med Git-branches, slik at hver komponent ble utviklet, testet og gjennomgått separat før den ble godkjent og lastet opp til hovedrepositoriet. Vi opplevde også noen tekniske utfordringer som vi løste i samarbeid med utviklere fra Egde, noe som bidro til økt forståelse og læring.', highlight: 'Komponenter: Avatar, Checkbox, Link '},
    { title: 'Uke 42 Komponentbiblioteket', desc: 'Denne uken tok vi fatt på mer komplekse komponenter og  dette var en uke med mye prøving og feiling, men også mye læring. Vi brukte teams aktivt for å få veiledning fra utviklere i Egde, og fikk god støtte når vi sto fast. Et sentralt punkt som ble tydelig i flere komponenter var forskjellen på next.js sine client og server-side komponenter vs tradisjonell server-client arkitektur. Dette ble tydelig i demo-visningene da klient side funskjonalitet måtte refaktoreres ut av selve demo komponenten.', highlight: 'Komponenter: Label, Tag, Sonner'},
    { title: 'Uke 43 Komponentbiblioteket', desc: 'Denne uken handlet mye om å forbedre eksisterende arbeid og sikre at komponentene fungerte slik de skulle. Vi gikk gjennom tidligere komponenter, rettet opp i småfeil og optimaliserte koden for bedre ytelse og vedlikehold. Samtidig jobbet vi med nye komponenter og implementerte flere designvarianter. Vi begynte også å tenke mer helhetlig rundt hvordan alle komponentene i biblioteket henger sammen visuelt og funksjonelt.', highlight: 'Komponenter: Slider, Command, Accordion, Tabs, Sonner'},
    { title: 'Uke 44 Komponentbiblioteket', desc: 'Denne uken følte vi oss tryggere på teknologiene og arbeidsprosessen, og kunne derfor jobbe mer effektivt. Vi fortsatte å lage nye komponenter denne uken også. Gjennom møte fikk vi nyttige innspill fra veilederen vår, og lærte mer om hvordan profesjonelle utviklingsprosjekter organiseres og kvalitetssikres.', highlight: 'Komponenter: Context-menu, Skeleton, Toggle-group, Select'},
    { title: 'Uke 45 Komponentbiblioteket', desc: 'Denne uken brukte vi mesteparten av tiden på testing, dokumentasjon og kvalitetssikring av komponentene vi hadde utviklet. Dette var også siste uken til den tredje studenten fra Porsgrunn og vi brukte derfor litt tid på å overlevere noe av arbeidet som han ikke rakk å bli ferdig med til oss så vi kunne fullføre det.', highlight: 'Komponenter: Input (oppdatert), Select, Bullet-list, Dropdown-menu'},
    { title: 'Uke 46 Komponentbiblioteket', desc: 'I praksisens siste uke ferdigstilte vi de siste komponentene og gjorde små justeringer etter tilbakemeldinger. Vi oppdaterte dokumentasjonen og hadde et avsluttende møte med veilederen vår, der vi oppsummerte erfaringene fra praksisperioden.', highlight: 'Komponenter: Blockquote, Popover, Menu-bar, Copy-button' }
    ];

function ProsjektDagbok() {
  return (
           <div className="page-container fancy-status">
            <h1 className='page-title'>Prosjektdagbok</h1>
            <p className='text-content'>
                Prosjektdagboken gir et innblikk inn i arbeidet som ble gjort på en ukentlig basis. Vi har ikke vært super flinke til å huske å skrive ned alt vi har gjort hver uke, men det er på grunn av at arbeidet har vært veldig engasjerende og tidkrevende. Likevel har vi fått med oss de viktigste punktene og milepælene i løpet av praksisperioden.
            </p>
            <section className="content-section">
                <h2 className="section-title">Samlet dagbok for Ida og Simon</h2>
                <ol className="timeline">
                    {statusUpdates.map((m, i) => (
                        <li key={i} className="timeline-item">
                            <div className="dot" />
                            <div className="content">
                                <h3>{m.title}</h3>
                                <p>{m.desc}</p>
                                {m.highlight && <p className="highlight-text">{m.highlight}</p>}
                            </div>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
  )
}

export default ProsjektDagbok
