import './Status1.css';

const metrics = [
        { label: 'Fullførte komponenter', value: 33, accent: 'blue' },
        { label: 'Commits', value: 146, accent: 'yellow' },
        { label: 'Gjenstående komponenter', value: 27, accent: 'orange' },
    ];

function Refleksjon() {
    return (
        <div className="page-container fancy-status">
            <h1 className="page-title">Avsluttende refleksjon</h1>
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

            {/* Main Reflection Section */}
            <section className="content-section">
                <h2 className="section-title">Refleksjon over praksisperioden</h2>
                <div className="text-content">
                    <p>
                        Vi ser tilbake på en lærerik og positiv praksisperiode hos Egde. Gjennom oppholdet har vi 
                        fått arbeide med nye teknologier og verktøy, blant annet React med TypeScript og TailwindCSS. 
                        I tillegg har vi fått bedre kjennskap til Figma og generell frontend-utvikling. Arbeidet vårt 
                        har hovedsakelig bestått i å oversette og tilpasse komponenter i et komponentbibliotek.
                    </p>
                    <p>
                        Biblioteket inneholdt over 50 komponenter, og vi rakk derfor ikke å fullføre hele prosessen i 
                        løpet av perioden. Likevel har dette arbeidet gitt oss verdifull erfaring og gjort oss tryggere 
                        i frontend-utvikling. Vi har opplevd et inkluderende og støttende arbeidsmiljø, der veiledere 
                        og kolleger har vært tilgjengelige for spørsmål og hjelp underveis. Denne oppfølgingen har hatt 
                        stor betydning for læringsutbyttet vårt.
                    </p>
                    <p>
                        Praksisen har også gitt oss et større innblikk i arbeidslivet. Vi har fått se hvordan teori 
                        omvendes til praktisk arbeid, og hvordan ulike teknologier brukes i reelle prosjekter. Denne 
                        erfaringen har gjort oss mer forberedt og bedre rustet til videre arbeid og fremtidige jobber 
                        innen feltet.   
                    </p>
                    <h2 className="section-title">Hva er det viktigste vi har lært</h2>
                        <ul>
                            <li>Next.js, React med TypeScript og TailwindCSS</li>
                            <li>Hvordan oversette design fra Figma til gjenbrukbare komponenter</li>
                            <li>Hvordan det er å jobbe selvstendig i et team</li>
                        </ul>
                    <h2 className="section-title">Mest utfordrende</h2>
                        <ul>
                            <li>Å sette seg inn i nye teknologier på kort tid</li>
                            <li>Tolke design fra Figma / manglende dokumentasjon</li>
                            <li>Balansere hvor mye en komponent skal ha ansvar for</li>
                        </ul>
                    <h2 className="section-title">Det rareste/gøyeste fra praksisperioden</h2>
                        <ul>
                            <li>Sosiale aktiviteter</li>
                            <ul>
                                <li>Spillkvelder</li>
                                <li>Oktoberfest</li>
                            </ul> 
                        </ul>
                </div>
            </section>
        </div>
    )
}

export default Refleksjon;
