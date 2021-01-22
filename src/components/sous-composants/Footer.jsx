import '../../styles/Footer.css';
import { ElementAnemo, ElementCryo, ElementDendro, ElementElectro, ElementHydro, ElementPyro, ElementGeo } from '../ImportImg';

const Footer = () => {
  return (
    <footer className="footer_outline">
      <div className="footer_line" />
      <img src={ElementPyro} alt="pyro-icon" width="40" height="40" />
      <img src={ElementHydro} alt="pyro-icon" width="40" height="40" />
      <img src={ElementAnemo} alt="pyro-icon" width="40" height="40" />
      <img src={ElementElectro} alt="pyro-icon" width="40" height="40" />
      <img src={ElementDendro} alt="pyro-icon" width="40" height="40" />
      <img src={ElementCryo} alt="pyro-icon" width="40" height="40" />
      <img src={ElementGeo} alt="pyro-icon" width="40" height="40" />
      <div className="footer_line" />
    </footer>
  )
};

export default Footer;