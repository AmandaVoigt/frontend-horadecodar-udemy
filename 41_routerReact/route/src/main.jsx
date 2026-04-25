import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./routes/Contact.jsx";

// 1 - configurando router
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// 2 - página de erro
import ErrorPage from "./routes/ErrorPage.jsx";

// 3 - componente base
import Home from "./routes/Home.jsx";

// 6 - rota dinâmica
import Product from "./routes/Product.jsx";

// 7 - nasted route
import { Info } from "./routes/Info.jsx";

// 8 - search params
import Search from "./routes/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 6 - rota dinâmica
      {
        path: "products/:id",
        element: <Product />,
      },
      // 7 - nasted route
      {
        path: "products/:id/info",
        element: <Info />,
      },
      // 8 - search params
      {
        path: "search",
        element: <Search />,
      },
      // 9 - redirecionamentos
      {
        path: "teste",
        element: <Navigate to="/" />,
      },
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
