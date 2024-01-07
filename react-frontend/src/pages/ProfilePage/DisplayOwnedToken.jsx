import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { TokenCard } from "../../components/TokenCard.jsx";
import {
  useContract,
  useOwnedNFTs,
  useAddress,
  Web3Button,
  useContractWrite,
} from "@thirdweb-dev/react";

import Tokens from "../../Tokens/TokenData.json";
import { SOULBOUND_CONTRACT } from "../../CONST.js";

import conMap from "../../img/con-map.jpg";
import CardBackground from "../../img/big-text-box.png";

const StyledClaimTokenPage = styled.div`
  background-image: url(${conMap});
  background-size: cover;
  background-attachment: fixed;
  column-gap: 40px;
  min-height: 100vh;
  padding-left: 80px;
  padding-right: 80px;
`;

const SmallCard = styled.div`
  background-image: url(${CardBackground});
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 870px) {
    transform: scale(0.7);
    margin-top: -150px;
  }
`;

const CardContent = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 870px) {
    transform: scale(1.4);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 870px) {
    transform: scale(0.5);
    flex-direction: column;
  }
`;

const BigCard = styled.div`
  @media screen and (max-width: 870px) {
    margin-top: -400px;
  }
`;

export const DisplayOwnedToken = () => {
  const token = useParams().token;
  const tokenID = useParams().tokenId;
  const soulboundToken = Tokens[token].soulboundToken;

  const { contract } = useContract(SOULBOUND_CONTRACT);
  const { mutateAsync: burn, isLoading } = useContractWrite(contract, "burn");

  return (
    <StyledClaimTokenPage>
      <ContentWrapper>
        <BigCard>
          <TokenCard token={token} />
        </BigCard>
        <SmallCard>
          <CardContent>
            <Web3Button
              contractAddress={SOULBOUND_CONTRACT}
              action={() =>
                burn({ args: [tokenID] })
                  .then(() => alert("Token burned!"))
                  .then(() => window.location.assign("/#/profile"))
              }
              onError={(error) => alert("Something went wrong!")}
              className="crg-button"
            >
              Burn Token
            </Web3Button>
          </CardContent>
        </SmallCard>
      </ContentWrapper>
    </StyledClaimTokenPage>
  );
};
