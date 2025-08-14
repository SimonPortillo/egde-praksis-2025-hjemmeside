import './Footer.css';

const Footer = () => (
  <footer>
    &copy; {new Date().getFullYear()} Gruppe X.
    <a href="https://egde.no" target="_blank" rel="noopener noreferrer">Egde.no</a>
  </footer>
);

export default Footer;