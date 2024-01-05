import { styled } from "styled-components";

import city from "../img/city.png";
import gamelogo from "../img/con-web-logo.png";
import horisontalLine from "../img/Line-fade-300.png";

const StyledLandingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${city});
  background-size: cover;
  background-attachment: fixed;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  transform: scale(1.2);
`;

const StyledImg = styled.img`
  height: 250px;
`;

const StyledH1 = styled.h1`
  all: unset;
  position: relative;
  margin-top: -10px;
  font-size: 2rem;
  font-weight: 900;
  text-shadow: -2px 2px 5px rgb(34, 0, 226);
  backdrop-filter: blur(5px);
  padding: 0px 40px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 100px;
  padding: 10px 30px;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    transform: scale(0.5);
  }
`;

const StyledHl = styled.img`
  width: 700px;
`;

export const LandingPage = () => {
  return (
    <StyledLandingPage>
      <StyledDiv>
        <StyledImg src={gamelogo} alt="city" />
        <StyledHl src={horisontalLine} style={{ marginBottom: 10 }} />
        <StyledH1>Soulbound Token Claiming Grounds</StyledH1>
        <StyledHl src={horisontalLine} />
        <a href="/#/claim">
          <StyledButton className="crg-button">Claim</StyledButton>
        </a>
      </StyledDiv>
    </StyledLandingPage>
  );
};
