import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";

import "../styles/header.css";

import gamelogo from "../img/crg/con-flat.svg";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;

  @media screen and (max-width: 870px) {
    transform: scale(0.6);
  }
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
            <NavLink className="menu-item" to={"/"}>
              Home
            </NavLink>
            <NavLink className="menu-item" to={"/claim"}>
              Claim
            </NavLink>
            <NavLink className="menu-item" to={"/profile"}>
              Profile
            </NavLink>
            <NavLink className="menu-item" to={"/about"}>
              About
            </NavLink>
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
