import './Status1.css';

function Status2() {
    const metrics = [
        { label: 'Fullførte komponenter', value: 26, accent: 'blue' },
        { label: 'Commits', value: 112, accent: 'yellow' },
        { label: 'Gjenstående komponenter', value: 29, accent: 'orange' },
    ];

    return (
        <div className="page-container fancy-status">
            <h1 className="page-title">Status 2 - 20.10.2025</h1>

            {/* Progress Overview */}
            <div className="progress-layout" style={{ marginBottom: '40px' }}>
                
                <div className="metrics-grid">
                    {metrics.map(m => (
                        <div key={m.label} className={`metric-card accent-${m.accent}`}>
                            <span className="metric-value">{m.value}</span>
                            <span className="metric-label">{m.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Misjon og domenekunnskap Section */}
            <section className="content-section">
                <h2 className="section-title">Misjon og domenekunnskap</h2>
                <div className="text-content">
                    <p>
                        Egde sin misjon er å skape bærekraftige, verdidrevne digitale løsninger gjennom samarbeid, 
                        kompetanse og nysgjerrighet. Selskapet kombinerer ekspertise innen rådgivning, utvikling, 
                        design, dataanalyse, sikkerhet og drift for å levere helhetlige løsninger som er skreddersydd 
                        etter kundens behov.
                    </p>
                    <p>
                        Ved å sette sammen tverrfaglige team med spesialister på brukeropplevelse, arkitektur og 
                        teknologi, kan Egde ta ansvar for hele eller deler av verdikjeden i en digital transformasjon. 
                        Deres domenekunnskap bygger på lang erfaring med å forstå komplekse forretningsprosesser og 
                        omforme dem til effektive, brukervennlige og trygge digitale tjenester.
                    </p>
                </div>
            </section>

            {/* Våre oppgaver Section */}
            <section className="content-section">
                <h2 className="section-title">Våre oppgaver</h2>
                <div className="text-content">
                    <p>
                        Vi fortsetter å jobbe med det samme prosjektet som ble beskrevet i status 1, der målet er å 
                        sammenligne et eksisterende register med et ferdig definert design i Figma. Hensikten er å 
                        sikre at løsningen samsvarer med designmalen og å rette opp eventuelle avvik som oppdages 
                        underveis. Prosjektet består av mange deloppgaver, og arbeidet pågår derfor fortsatt.
                    </p>
                    <p>
                        Dette prosjektet har vært svært lærerikt, spesielt fordi vi tilegner oss kunnskap i React og Tailwind som 
                        brukes mye i moderne webutvikling. Vi har fått praktisk erfaring med front-end utvikling, 
                        i tillegg har vi fått bedre innsikt i hvordan Figma fungerer som designverktøy, og hvor 
                        omfattende og nyttig det kan være i utviklingsprosesser. Vi skal fortsette arbeidet videre 
                        med dette, ettersom det fortsatt gjenstår flere komponenter som må oversettes i prosjektet.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Status2;
