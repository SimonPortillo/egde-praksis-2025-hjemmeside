import './Status1.css';

function Status1() {
    const milestones = [
        { title: 'Uke 34, Oppstart', desc: 'Tilganger, oppsett av utviklingsmiljø og lære tech stack.' },
        { title: 'Uke 35-36, Internasjonalisering; EgdeAI', desc: 'Simon har implementert i18n for å støtte flerspråklighet i applikasjonen.' },
        { title: 'Uke 35-37, Komponent bibliotek; Egd-UI', desc: 'Ida og Nicolai har gjort god fremgang med komponentbiblioteket.' }
    ];

    return (
        <div className="page-container fancy-status">
            <h1 className="page-title">Status 1 - 12.09.2025</h1>

            {/* Om Egde Section */}
            <section className="content-section">
                <h2 className="section-title">Om Egde</h2>
                <div className="text-content">
                    <p>
                        Egde Consulting er et konsulentselskap etablert i 2016, med kontorer i Kristiansand, 
                        Grimstad og Porsgrunn. Selskapet har i dag rundt 100 ansatte fordelt på de ulike lokasjonene.
                    </p>
                    <p>
                        De tilbyr tjenester til både private og offentlige aktører, med en portefølje som omfatter 
                        rådgivning, prosjektledelse, systemutvikling, brukeropplevelse og design, dataanalyse, 
                        sikkerhet og testing. For å møte kundenes behov setter Egde sammen skreddersydde, 
                        tverrfaglige team som sikrer leveranser av høy verdi.
                    </p>
                    <p>
                        I tillegg er Egde en del av NOVA Consulting Group, et konsern bestående av 14 
                        spesialistselskaper som samlet dekker hele spekteret av digitale tjenester.
                    </p>
                    <div className="learn-more">
                        <a href="https://egde.no/tjenester/" target="_blank" rel="noopener noreferrer" className="learn-more-btn">
                            Les mer om Egde
                        </a>
                    </div>
                </div>
            </section>

            {/* Våre arbeidsoppgaver Section */}
            <section className="content-section">
                <h2 className="section-title">Våre arbeidsoppgaver så langt hos Egde</h2>
                <div className="work-tasks">
                    <div className="task-card">
                        <div className="task-image">
                            <img src="/simon-jobb.jpg" alt="Simon jobber med koding" />
                        </div>
                        <div className="task-content">
                            <h3>Simon | Internasjonalisering; EgdeAI</h3>
                            <p>
                                Simon startet med å sette seg inn i Next.js og EgdeAI. Lærte om Internasjonalisering (i18n) 
                                og Lokalisering (l10n). Satt opp prosjektet til å støtte flere språk og formateringer (f.eks. datoer, valuta) med egne ruter for hvert språk (locale),
                                og implementerte Lokalisering, altså å faktisk legge til et eller flere språk, i vårt 
                                tilfelle så var det engelsk. Dette innebærerte å lage en slags ordliste i JSON format for 
                                å så hente meldingen inn i relevante komponenter, via en hook. I praksis må man bytte ut all tekst i alle komponenter med en variabel som byttes ut med teksten fra ordlisten basert på brukerens prefiks (eksempel: /en/about).
                            </p>
                        </div>
                    </div>
                    <div className="task-card">
                        <div className="task-image">
                            <img src="/ida-jobb.jpg" alt="Ida jobber med design" />
                        </div>
                        <div className="task-content">
                            <h3>Ida | Komponentbibliotek; Egd-UI</h3>
                            <p>
                                Ida startet på et komponentbibliotek prosjekt kalt Egd-UI, hvor oppgaven gikk ut på å oversette et eksisterende 
                                register (basert på shadcn komponenter) med et ferdig definert design i Figma. Hensikten er å sikre at registeret samsvarer 
                                med designmalen, og å korrigere eventuelle avvik. Dette kan for eksempel være feil bruk av 
                                font eller farger, eller tilfeller der flere varianter må legges til i registeret. Innad i 
                                prosjektet er det mange ulike oppgaver som må løses, og ettersom Simon er ferdig med sitt 
                                første prosjekt har han gått over til å jobbe med dette prosjektet nå.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Utfordringer Section */}
            <section className="content-section">
                <h2 className="section-title">Utfordringer</h2>
                <div className="challenges-content">
                    <h3>Internasjonalisering; EgdeAI</h3>
                    <p>
                        Å sette opp prosjektet til å støtte flere språk var en utfordring da det krevde en god forståelse av prosjektet struktur. Det var omfattende endringer i struktur som måtte til for å få til å ha flerspråklighet. I tillegg var det utfordrende å implementere oversettelser i komponenter som allerede var komplekse, noe som krevde nøye planlegging og testing for å sikre at alt fungerte som forventet.
                    </p>
                    <h3>Komponentbibliotek; Egd-UI</h3>
                    <p>
                        Den største utfordringen var at prosjektet benyttet systemer og metoder vi ikke har brukt 
                        tidligere, noe som gjorde at det tok tid å sette seg inn i disse før vi kunne komme ordentlig 
                        i gang med selve arbeidet. I tillegg benyttet det en annen struktur for kodeoppsettet enn 
                        det vi var vant til, noe som også krevde tid å bli kjent med.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="content-section">
                <h2 className="section-title">Milepæler</h2>
                <ol className="timeline">
                    {milestones.map((m, i) => (
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

export default Status1;