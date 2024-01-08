import { createHashRouter } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { LandingPage } from "./pages/LandingPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { ClaimPage } from "./pages/ClaimPage/ClaimPage";
import { AboutPage } from "./pages/AboutPage";
import { ClaimToken } from "./pages/ClaimPage/ClaimToken";
import { DisplayOwnedToken } from "./pages/ProfilePage/DisplayOwnedToken";

export const Router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage />, index: true },
      { path: "/profile", element: <ProfilePage /> },
      {
        path: "/profile/:token/:tokenId",
        element: <DisplayOwnedToken />,
      },
      { path: "/claim", element: <ClaimPage /> },
      { path: "/claim/:token", element: <ClaimToken /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);
