import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import {
  useContract,
  useAddress,
  Web3Button,
  useContractWrite,
} from "@thirdweb-dev/react";

import { TokenCard } from "../components/TokenCard";

import { SOULBOUND_CONTRACT } from "../CONST.js";
import Tokens from "../Tokens/TokenData.json";

import conMap from "../img/con-map.jpg";
import CardBackground from "../img/big-text-box.png";

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
  height: 400px;
  width: 300px;
  background-image: url(${CardBackground});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ClaimToken = () => {
  const token = useParams().token;
  const soulboundToken = Tokens[token].soulboundToken;

  const address = useAddress();

  const { contract } = useContract(SOULBOUND_CONTRACT);
  const { mutateAsync: mintSoulboundToken, isLoading } = useContractWrite(
    contract,
    "mintSoulboundToken"
  );

  return (
    <StyledClaimTokenPage>
      <TokenCard token={token} />
      <SmallCard>
        <Web3Button
          contractAddress={SOULBOUND_CONTRACT}
          action={() => mintSoulboundToken({ args: [address, soulboundToken] })}
          onError={(error) => alert("Something went wrong!")}
          className="crg-button"
          style={{ transform: "scale(1.2)" }}
        >
          CLAIM NOW
        </Web3Button>
      </SmallCard>
    </StyledClaimTokenPage>
  );
};
