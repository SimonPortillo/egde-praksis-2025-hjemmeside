import './About.css';
import githubLogo from '../assets/bx-github.svg'; // Update path if different
import linkedinLogo from '../assets/bx-linkedin-square.svg'; // Update path if different

function About() {
    return (
        <div className="page-container">
            <h1 className="page-title">Om oss</h1>
            <div className="page-content">
                <div className="profile-header">
                    <h2>Simon</h2>
                    <div className="social-links">
                        <a href="https://github.com/SimonPortillo" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/simon-portillo-75a46628b/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                        </a>
                    </div>
                </div>
                <p>
                    Simon Portillo, 21 år fra Porsgrunn. Jeg liker å lære nye ting, spesielt innen teknologi og programmering. Jeg er interessert i full-stack utvikling, og ser frem til å jobbe med spennende prosjekter.
                    <br />
                    <br />
                    Jeg har erfaring med Java, C# (.NET), React (JS og Typescript) og har jobbet med prosjekter som involverer både frontend og backend utvikling.
                </p>

            <div className="profile-header">
                    <h2>Ida</h2>
                    <div className="social-links">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub" className="social-icon" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                        </a>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem modi labore, aliquid aspernatur maiores corrupti debitis veritatis magnam eligendi exercitationem non atque, sed voluptatum commodi, a in aliquam dicta provident!
                </p>  
            </div>
        </div>
    )
}

export default About;