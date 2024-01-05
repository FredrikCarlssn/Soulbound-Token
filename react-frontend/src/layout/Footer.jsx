import { styled } from "styled-components";
import "../styles/footer.css";

import crglogo from "../img/crg/crg-logo.png";
import xlogo from "../img/crg/x-logo.png";
import instagramlogo from "../img/crg/instagram-logo.png";
import mediumlogo from "../img/crg/medium-logo.png";
import discordlogo from "../img/crg/discord-logo.png";

const StyledFooter = styled.footer``;

const StyledWrapper = styled.div`
  @media screen and (max-width: 870px) {
    transform: scale(0.7);
  }
`;

export const Footer = () => {
  return (
    <footer className="main-footer">
      <StyledWrapper>
        <div className="footer-content">
          <div className="footer-disclaimer">
            <h4 className="desktop">Disclaimer</h4>
            <p className="footer desktop">
              Crystals of Naramunz is an action RPG in early development and
              while we aspire to accurately describe the game, we cannot
              guarantee that everything you are presented with here will make it
              into the final product.
            </p>
          </div>
          <div className="footer-logo">
            <img src={crglogo} alt="Company Logo" />
          </div>
          <div className="footer-social">
            <h4>Official Channels</h4>
            <div className="social-icons">
              <a href="https://twitter.com/naramunz" target="_blank">
                <img src={xlogo} alt="Twitter" />
              </a>
              <a href="https://www.instagram.com/naramunz/" target="_blank">
                <img src={instagramlogo} alt="Instagram" />
              </a>
              <a href="https://medium.com/@Naramunz" target="_blank">
                <img src={mediumlogo} alt="YouTube" />
              </a>
              <a href="https://discord.gg/ntPmauYuKV" target="_blank">
                <img src={discordlogo} alt="Discord" />
              </a>
            </div>
          </div>
        </div>
        <h4 className="mobile">Disclaimer</h4>
        <p className="footer mobile">
          Crystals of Naramunz is an action RPG in early development and while
          we aspire to accurately describe the game, we cannot guarantee that
          everything you are presented with here will make it into the final
          product.
        </p>
      </StyledWrapper>
    </footer>
  );
};
