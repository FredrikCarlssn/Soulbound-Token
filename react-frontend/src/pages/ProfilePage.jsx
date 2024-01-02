import { styled } from "styled-components";
import { useOwnedNFTs, useAddress, useContract } from "@thirdweb-dev/react";
import { SOULBOUND_CONTRACT } from "../CONST.js";

import city from "../img/city-back-drop.jpg";

const StyledProfilePage = styled.div`
  background-image: url(${city});
  min-height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  padding: 110px 120px;
`;

export const ProfilePage = () => {
  const address = useAddress();
  const { contract } = useContract(SOULBOUND_CONTRACT);
  const { data, isLoading, error } = useOwnedNFTs(contract, address);

  console.log(isLoading);
  console.log(data);
  console.log(error);

  return (
    <StyledProfilePage>
      <h1>ProfilePagebcwelovbeervbqprbfvewvuerubvweprbuwervubi</h1>
    </StyledProfilePage>
  );
};
