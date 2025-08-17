import './Footer.css';
import uiaLogo from '../assets/uia-logo.png';
import egdeLogo from '../assets/egde.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <div className="collaboration-container">
        <a href="https://egde.no" target="_blank" rel="noopener noreferrer">
          <img src={egdeLogo} alt="Egde Logo" className="footer-logo" />
        </a>
        <div className="vertical-spacer"></div>
        <a href="https://www.uia.no" target="_blank" rel="noopener noreferrer">
          <img src={uiaLogo} alt="UIA Logo" className="footer-logo" />
        </a>
      </div>
    </div>
    <div className="footer-right">
      &copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/simon-portillo-75a46628b/" target="_blank" rel="noopener noreferrer">Simon Portillo</a>
    </div>
  </footer>
);

export default Footer;