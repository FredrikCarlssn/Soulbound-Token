import { styled } from "styled-components";

import horisontalLine from "../img/Line-fade-300.png";
import CardBackground from "../img/big-text-box.png";

const StyledImg = styled.img`
  width: 160px;
  transform: scaleY(5);
  filter: brightness(1.7) contrast(1.5);
`;
const StyledP = styled.p`
  all: unset;
  font-size: 20px;
  font-weight: 900;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  background-image: url(${CardBackground});
  background-size: contain;
  /* background-color: #1b1a20;
  border: 3px solid #694e43; */
  /* backdrop-filter: blur(10px); */
  padding: 20px;
  border-radius: 3px;
`;

export const DisplayToken = ({ image, clickedImage, name }) => {
  const StyledButton = styled.button`
    all: unset;
    background-image: url(${image});
    background-size: contain;
    background-repeat: no-repeat;
    height: 150px;
    width: 150px;
    transition: 0.2s ease;
    position: relative;
    bottom: 0px;
    left: 0px;
    transition: 0.5s ease;
    &:hover {
      left: 1px;
      bottom: 1px;
      color: #e7e8e8;
      cursor: pointer;
      filter: brightness(1.15) contrast(1.2);
    }
    ${clickedImage &&
    `
        &:active {
          background-image: url(${clickedImage});
        }
      `}
  `;
  return (
    <StyledDiv>
      <a href={`/#/claim/${name}`}>
        <StyledButton />
      </a>
      <StyledImg src={horisontalLine} alt={name} style={{ marginTop: 10 }} />
      <StyledP>{name}</StyledP>
      <StyledImg src={horisontalLine} alt={name} />
    </StyledDiv>
  );
};
