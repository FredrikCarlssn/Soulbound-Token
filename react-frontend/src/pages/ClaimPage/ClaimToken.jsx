import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import {
  useContract,
  useOwnedNFTs,
  useAddress,
  Web3Button,
  useContractWrite,
} from "@thirdweb-dev/react";

import { TokenCard } from "../../components/TokenCard.jsx";

import { SOULBOUND_CONTRACT } from "../../CONST.js";
import Tokens from "../../Tokens/TokenData.json";

import conMap from "../../img/con-map.jpg";
import CardBackground from "../../img/big-text-box.png";

const StyledClaimTokenPage = styled.div`
  background-image: url(${conMap});
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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
    transform: scale(0.6);
    margin-top: -180px;
  }
`;

const CardContent = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 870px) {
    transform: scale(1.2);
  }
`;

const BigCard = styled.div`
  @media screen and (max-width: 870px) {
    margin-top: -400px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1100px) {
    transform: scale(0.5);
    flex-direction: column;
  }
`;

export const ClaimToken = () => {
  const token = useParams().token;
  const soulboundToken = Tokens[token].soulboundToken;
  const [ownsToken, setOwnsToken] = useState(false);

  const address = useAddress();

  const { contract } = useContract(SOULBOUND_CONTRACT);
  const {
    data,
    isLoading: isLoading2,
    error,
  } = useOwnedNFTs(contract, address);
  const { mutateAsync: mintSoulboundToken, isLoading } = useContractWrite(
    contract,
    "mintSoulboundToken"
  );

  useEffect(() => {
    if (!isLoading2) {
      if (data.length > 0) {
        data.forEach((ownedToken) => {
          if (ownedToken.metadata.name === token) {
            setOwnsToken(true);
          }
        });
      }
    }
  }, [isLoading2]);

  if (ownsToken)
    return (
      <StyledClaimTokenPage>
        <ContentWrapper>
          <BigCard>
            <TokenCard token={token} />
          </BigCard>
          <SmallCard>
            <CardContent>Token already owned</CardContent>
          </SmallCard>
        </ContentWrapper>
      </StyledClaimTokenPage>
    );

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
                mintSoulboundToken({ args: [address, soulboundToken] }).then(
                  () => setOwnsToken(true)
                )
              }
              onError={(error) => alert("Something went wrong!")}
              className="crg-button"
              style={{ transform: "scale(1.2)" }}
            >
              CLAIM NOW
            </Web3Button>
          </CardContent>
        </SmallCard>
      </ContentWrapper>
    </StyledClaimTokenPage>
  );
};
