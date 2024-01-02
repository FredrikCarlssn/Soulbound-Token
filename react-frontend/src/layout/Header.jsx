import { styled } from "styled-components";
import { ConnectWallet } from "@thirdweb-dev/react";

import "../styles/header.css";

import gamelogo from "../img/crg/con-flat.svg";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
`;

const WalletStyle = styled.div`
  font-size: 0.5 !important;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="menu-bar">
        <div className="menu-logo-separator">
          <div className="menu-logo">
            <img src={gamelogo} alt="Logo" />
          </div>
          <div className="menu-separator"></div>
        </div>
        <div className="menu-items-and-buttons">
          <div className="menu-items-container">
            <a className="menu-item" href="/">
              Home
            </a>
            <a className="menu-item" href="/#/claim">
              Claim
            </a>
            <a className="menu-item" href="/#/profile">
              Profile
            </a>
            <a className="menu-item" href="/#/about">
              About
            </a>
          </div>
          <div className="menu-buttons">
            <WalletStyle>
              <ConnectWallet className="web3button" />
            </WalletStyle>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};