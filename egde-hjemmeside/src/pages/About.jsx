import './About.css';
import ProfileCard from '../components/ProfileCard';

function About() {
    return (
        <div className="about-section-wrapper">
            <div className="section-intro">
                <h1 className="section-title gradient-text">Om oss</h1>
                <p className="section-lead">I år har Egde tatt inn to fra UiA og en fra USN. Vi fra UiA presenterer oss:</p>
            </div>
            <div className="profiles-grid">
                <ProfileCard
                    name="Simon Portillo"
                    role="Full-Stack / Student"
                    bio="21 år fra Porsgrunn. Liker å lære nye ting, spesielt innen teknologi. Erfaring med Java, C# (.NET), React (JS/TS) og full-stack prosjekter."
                    github="https://github.com/SimonPortillo"
                    linkedin="https://www.linkedin.com/in/simon-portillo-75a46628b/"
                    image="/simon.jpg"
                />
                <ProfileCard
                    name="Ida Svendby"
                    role="Frontend / Student"
                    bio="26 år fra Porsgrunn. Jeg er interresert i KI og frontend utvikling. Jeg har erfaring med Java,C# og (.NET)"
                    github="https://github.com/idassvv"
                    linkedin="https://www.linkedin.com/in/idasvendby/"
                    image="/ida.jpg"
                />
            </div>
        </div>
    );
}

export default About;