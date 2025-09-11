import './Home.css';
import egdeLogo from '../assets/egde.svg';

function Home() {
  const scrollToContent = () => {
    const el = document.getElementById('oppgavebeskrivelse');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero-section">
        <img src={egdeLogo} alt="Egde logo" className="hero-logo" />
        <div style={{ textAlign: 'center' }}>
          <h1 className="hero-title">Egde Praksisprosjekt 2025</h1>
        </div>
        <p className="hero-description">
         Praksisprosjekt hos Egde Consulting. 
        </p>
        <div className="scroll-arrow" onClick={scrollToContent}>
          <span className="scroll-text">Vis mer</span>
          <div className="arrow-icon"></div>
        </div>
      </section>
      
      <div className="home-container" id='oppgavebeskrivelse'>
        <h2 className="home-title">Oppgavebeskrivelse</h2>
        <p className="home-description">
            <a href="https://www.uia.no/studier/emner/2025/host/is-302.html">Praksisprosjektet IS-302</a> hos Egde i 2025 fokuserer på full-stack utvikling, hvor vi skal jobbe med moderne webteknologier som React og Next.js. Vi er tre studenter, to fra UiA og en fra USN, som skal hjelpe til med å videreutvikle en AI-chatbot; EgdeAI, implementere et design bibliotek og andre oppgaver.
          <br />
          <br />
            <a href="https://egde.no/product/egdeai/">"EgdeAI</a> er en applikasjon og en chattetjeneste. I kjernen av EgdeAI ligger kunstig intelligens (AI) som er bygget på GPT-teknologien til OpenAI. Dette bidrar til naturlig språkprosessering- og generering, slik at applikasjonen kan gi rike og nyanserte svar på spørsmål fra brukerne. Løsningen tilbyr et trygt «rom» hvor man ikke trener modellene eller eksponerer interne data for omverdenen på en ukontrollert måte."
        </p>
        {/* <button onClick={() => {alert("Kommer senere!")}} className="home-cta">Se video</button> */}
      </div>
    </>
  );
}

export default Home;  