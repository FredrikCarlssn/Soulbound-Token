import { styled } from "styled-components";

import Tokens from "../Tokens/TokenData.json";

import CardBackground from "../img/big-text-box.png";
import horisontalLine from "../img/Line-fade-300.png";

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

export const TokenCard = ({ token }) => {
  const tokenJSON = Tokens[token];

  return (
    <div>
      <StyledCard>
        <StyledImageDiv>
          <StyledImage
            src={require(`../Tokens/img/${tokenJSON.soulboundToken}/default.png`)}
          />
        </StyledImageDiv>
        <h1>{tokenJSON.Name}</h1>
        <StyledHl src={horisontalLine} style={{ marginBottom: 10 }} />
        <StyledP>{tokenJSON.Description}</StyledP>
      </StyledCard>
    </div>
  );
};
