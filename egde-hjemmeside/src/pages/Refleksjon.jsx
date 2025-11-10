import './Status1.css';

function Refleksjon() {
    return (
        <div className="page-container fancy-status">
            <h1 className="page-title">Avsluttende refleksjon</h1>

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
                </div>
            </section>
        </div>
    )
}

export default Refleksjon;
