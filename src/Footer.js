import './Footer.scss';
import './Alert.js';
import greeting from './Alert.js';

function Footer() {
  return (
    <div className="footer" onClick={greeting}>
      I am Footer
    </div>  
  );
}

export default Footer;