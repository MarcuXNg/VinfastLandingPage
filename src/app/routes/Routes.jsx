import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppShell from "../AppShell";

// Sections
import Hero from "../../components/Hero";
import ModelsGrid from "../../components/ModelsGrid";
import BanGiaoXe from "../../components/BanGiaoXe";
import Form from "../../components/Form";
import ProductDetail from "../../pages/ProductDetail";
import CatalogGrid from "../../components/CatalogGrid";

import RouteErrorBoundary from "../error/RouteErrorBoundary.jsx";
import NotFound from "../../pages/NotFound.jsx";

// import Login from "../../features/auth/components/Login.jsx";
// import Protected from "../../features/auth/api/Protected";
// import Admin from "../../features/auth/components/Admin.jsx";

const router = createBrowserRouter([
  {
    element: <AppShell />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <ModelsGrid />
            <CatalogGrid />
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

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
