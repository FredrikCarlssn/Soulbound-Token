import { styled } from "styled-components";

import Tokens from "../Tokens/TokenData.json";

import CardBackground from "../img/big-text-box.png";
import horisontalLine from "../img/Line-fade-300.png";
import Knight from "../img/Knight.png";
import Gunner from "../img/Gunner.png";

export const TokenCard = ({ token }) => {
  const tokenJSON = Tokens[token];

  switch (tokenJSON.Name) {
    case "Knight":
      var tokenImage = Knight;
      break;
    case "Gunner":
      var tokenImage = Gunner;
      break;
    default:
      var tokenImage = Knight;
  }

  const StyledCard = styled.div`
    height: 900px;
    width: 680px;
    background-image: url(${CardBackground});
    background-size: contain;
    background-repeat: no-repeat;
    padding: 80px 50px;
    transform: scale(0.8);
  `;

  const StyledImageDiv = styled.div`
    display: flex;
    justify-content: center;
  `;

  const StyledImage = styled.img`
    height: 400px;
    transition: 0.3s ease;
    &:hover {
      filter: brightness(1.1) contrast(1.1);
    }
  `;

  const StyledHl = styled.img`
    width: 570px;
  `;

  const StyledP = styled.p`
    font-size: 20px;
  `;

  return (
    <div>
      <StyledCard>
        <StyledImageDiv>
          <StyledImage src={tokenImage} />
        </StyledImageDiv>
        <h1>{tokenJSON.Name}</h1>
        <StyledHl src={horisontalLine} style={{ marginBottom: 10 }} />
        <StyledP>{tokenJSON.Description}</StyledP>
      </StyledCard>
    </div>
  );
};
