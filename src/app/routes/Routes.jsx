import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppShell from "../AppShell";

// Sections
import PopUp from "../../components/PopUp";
import FloatingContact from "../../components/FloatingContact";
import Hero from "../../components/Hero";
import ModelsGrid from "../../components/ModelsGrid";
import BanGiaoXe from "../../components/BanGiaoXe";
import Form from "../../components/Form";
import ProductDetail from "../../pages/ProductDetail";

// import Login from "../../features/auth/components/Login.jsx";
// import Protected from "../../features/auth/api/Protected";
// import Admin from "../../features/auth/components/Admin.jsx";

const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        path: "/",
        element: (
          <>
            <PopUp />
            <FloatingContact
              zaloLink="https://zalo.me/0967034207"
              phone="0967034207"
            />
            <Hero />
            <ModelsGrid />
            <BanGiaoXe />
            <Form />
          </>
        ),
      },
      { path: "/product/:id", element: <ProductDetail /> },

      // ---- ADMIN ----
      // { path: "/admin/login", element: <Login /> },
      // {
      //   path: "/admin",
      //   element: (
      //     <Protected>
      //       <Admin />
      //     </Protected>
      //   ),
      // },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
