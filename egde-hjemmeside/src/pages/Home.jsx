import './Home.css';
import egdeLogo from '../assets/egde.svg';
import { useRef } from 'react';

function Home() {
  const containerRef = useRef(null);

  const scrollToContent = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero-section">
        <img src={egdeLogo} alt="Egde logo" className="hero-logo" />
        <h1 className="hero-title">Egde Praksisprosjekt 2025</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis adipisci, incidunt aut consequuntur, dolorum sint ad quos tenetur est veniam obcaecati ipsum atque eaque sequi libero. Quam, autem sint?
        </p>
        <div className="scroll-arrow" onClick={scrollToContent}>
          <span className="scroll-text">Vis mer</span>
          <div className="arrow-icon"></div>
        </div>
      </section>
      
      <div className="home-container" ref={containerRef}>
        <h2 className="home-title">Oppgavebeskrivelse</h2>
        <p className="home-description">
            Dette er en beskrivelse av oppgaven for Egde Praksisprosjekt 2025. Her kan du finne all nødvendig informasjon om prosjektet, inkludert mål, tidslinje og forventninger.
        </p>
        <p className="home-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur impedit vel deleniti asperiores alias aperiam distinctio illum, voluptatum labore recusandae exercitationem ducimus quod numquam debitis placeat magnam cumque consectetur molestias.
        </p>
        <p className="home-description">
            For mer informasjon, vennligst se vår <a href="/about">Om oss</a> side.
        </p>
        <button className="home-cta">Se video</button>
      </div>
    </>
  );
}

export default Home;