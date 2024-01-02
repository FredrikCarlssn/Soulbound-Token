import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

import { styled } from "styled-components";

const StyledMain = styled.main`
  color: white;
  min-height: 100vh;
`;

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
};
