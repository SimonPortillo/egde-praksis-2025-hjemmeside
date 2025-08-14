import './Footer.css';
import uiaLogo from '../assets/uia-logo.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <img src={uiaLogo} alt="UIA Logo" className="footer-logo" />
    </div>
    <div className="footer-right">
      &copy; {new Date().getFullYear()} Gruppe X.
      <a href="https://egde.no" target="_blank" rel="noopener noreferrer">Egde.no</a>
    </div>
  </footer>
);

export default Footer;