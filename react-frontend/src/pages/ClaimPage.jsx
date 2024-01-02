import styled from "styled-components";

import bank from "../img/bank.png";
import horisontalLine from "../img/Line-fade-300.png";
import Knight from "../img/Knight.png";
import KnightClicked from "../img/Knight-clicked.png";
import Gunner from "../img/Gunner.png";
import GunnerClicked from "../img/Gunner-clicked.png";

import { DisplayToken } from "../components/DisplayToken";

const StyledClaimPage = styled.div`
  background-image: url(${bank});
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 110px 120px;
`;

const StyledTokenList = styled.div`
  display: flex;
`;

const StyledDiv = styled.div`
  backdrop-filter: blur(5px) brightness(0.8);
  padding: 20px 30px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const StyledH1 = styled.h1`
  margin: 0px 0px -20px 20px;
`;

const StyledImg = styled.img`
  width: 700px;
`;

const StyledP = styled.p`
  font-size: 18px;
  margin: 0px 0px 0px 20px;
`;

export const ClaimPage = () => {
  return (
    <StyledClaimPage>
      <StyledDiv>
        <StyledH1>Alpha collection</StyledH1>
        <StyledImg src={horisontalLine} />
        <StyledP>
          This is a limited drop of soulbound tokens to celebrate alpha launch.
          Choose your warrior and claim your own token!
        </StyledP>
      </StyledDiv>
      <StyledTokenList>
        <DisplayToken
          image={Knight}
          clickedImage={KnightClicked}
          name={"Knight"}
        />
        <DisplayToken
          image={Gunner}
          clickedImage={GunnerClicked}
          name={"Gunner"}
        />
      </StyledTokenList>
    </StyledClaimPage>
  );
};
