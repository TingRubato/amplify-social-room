import React from 'react';
import SocialLinks from '../SocialLinks';
import './Footer.css';
// import FooterIMG from "../../assets/Images/evonne-weinhaus-fast-solutiuons.png";

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear()} Evonne Weinhaus.</p>
        <div className="wrapper-social">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
