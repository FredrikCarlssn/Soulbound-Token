import { styled } from "styled-components";
import { useOwnedNFTs, useAddress, useContract } from "@thirdweb-dev/react";
import { SOULBOUND_CONTRACT } from "../../CONST.js";

import { DisplayToken } from "../../components/DisplayToken.jsx";
import { Spinner } from "../../components/Spinner.jsx";

import city from "../../img/city-back-drop.jpg";
import softLight from "../../img/soft-light-fog.png";
import horisontalLine from "../../img/Line-fade-300.png";

const StyledProfilePage = styled.div`
  background-image: url(${city});
  min-height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  padding: 120px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1500px;
`;

const StyledTokenList = styled.div`
  display: flex;
`;

const Background = styled.div`
  background-image: url(${softLight});
  background-size: cover;
  background-position: bottom;
  background-blend-mode: multiply;
  backdrop-filter: brightness(0.8) contrast(1) blur(10px);
  min-height: 80vh;
  padding: 50px;
  border-radius: 3px;

  @media screen and (max-width: 870px) {
    padding: 0px;
  }
`;

const Account = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b1a20;
  border: 4px solid #694e43;
  padding: 0 20px;
`;

const StyledP = styled.p`
  all: unset;
  transition: 0.2s ease;
  &:hover {
    color: #b7a99c;
  }
`;

const StyledH2 = styled.h2`
  all: unset;
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
`;

const StyledImg = styled.img`
  width: 350px;
  transform: scaleY(3);
  filter: brightness(1.7) contrast(1.5);
`;

const Content = styled.div`
  @media screen and (max-width: 870px) {
    transform: scale(0.7);
  }
`;
export const ProfilePage = () => {
  const address = useAddress();
  const { contract } = useContract(SOULBOUND_CONTRACT);
  const { data, isLoading, error } = useOwnedNFTs(contract, address);

  console.log(address);

  if (address === undefined)
    return (
      <StyledProfilePage>
        <ContentWrapper>
          <hr />
          <Background>
            <Content>
              <Account>
                <StyledH2>Logged in with account:</StyledH2>
                <StyledImg src={horisontalLine} style={{ marginTop: 10 }} />
                <StyledP>NO ACCOUNT CONNECTED</StyledP>
                <StyledImg src={horisontalLine} style={{ marginBottom: 10 }} />
              </Account>
            </Content>
          </Background>
          <hr />
        </ContentWrapper>
      </StyledProfilePage>
    );

  if (!data)
    return (
      <StyledProfilePage>
        <ContentWrapper>
          <hr />
          <Background>
            <Content>
              <Account>
                <StyledH2>Logged in with account:</StyledH2>
                <StyledImg src={horisontalLine} style={{ marginTop: 10 }} />
                <StyledP>{address}</StyledP>
                <StyledImg src={horisontalLine} style={{ marginBottom: 10 }} />
              </Account>
              <h2>Owned Tokens:</h2>
              <Spinner />
            </Content>
          </Background>
          <hr />
        </ContentWrapper>
      </StyledProfilePage>
    );

  if (data.length === 0) {
    return (
      <StyledProfilePage>
        <ContentWrapper>
          <hr />
          <Background>
            <Content>
              <Account>
                <StyledH2>Logged in with account:</StyledH2>
                <StyledImg src={horisontalLine} style={{ marginTop: 10 }} />
                <StyledP>{address}</StyledP>
                <StyledImg src={horisontalLine} style={{ marginBottom: 10 }} />
              </Account>
              <h2>Owned Tokens:</h2>
              <StyledP>
                Oooopsss, looks like you dont own any tokens yet!
              </StyledP>
            </Content>
          </Background>
          <hr />
        </ContentWrapper>
      </StyledProfilePage>
    );
  }

  return (
    <StyledProfilePage>
      <ContentWrapper>
        <hr />
        <Background>
          <Content>
            <Account>
              <StyledH2>Logged in with account:</StyledH2>
              <StyledImg src={horisontalLine} style={{ marginTop: 10 }} />
              <StyledP>{address}</StyledP>
              <StyledImg src={horisontalLine} style={{ marginBottom: 10 }} />
            </Account>
            <h2>Owned Tokens:</h2>
            <StyledTokenList>
              {data.map((token) => {
                return (
                  <DisplayToken
                    name={token.metadata.name}
                    linkTo={`profile/${token.metadata.name}/${token.metadata.id}`}
                    key={token.metadata.id}
                  />
                );
              })}
            </StyledTokenList>
          </Content>
        </Background>
        <hr />
      </ContentWrapper>
    </StyledProfilePage>
  );
};
