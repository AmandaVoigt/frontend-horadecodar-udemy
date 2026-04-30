// Importa o StrictMode do React
// Ele ajuda a identificar problemas no código (só em desenvolvimento)
import { StrictMode } from "react";

// Função que cria a "raiz" da aplicação no HTML
// É aqui que o React começa a controlar a tela
import { createRoot } from "react-dom/client";

// Importa o CSS global (estilos gerais)
import "./index.css";

// Importa o componente principal (layout base da aplicação)
import App from "./App.jsx";

// Importa páginas (rotas)
import Contact from "./routes/Contact.jsx";
import Home from "./routes/Home.jsx";
import Product from "./routes/Product.jsx";
import { Info } from "./routes/Info.jsx";
import Search from "./routes/Search.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

// Importa ferramentas de roteamento
import {
  createBrowserRouter, // cria o sistema de rotas
  RouterProvider,      // aplica o router na aplicação
  Navigate,            // redireciona automaticamente
} from "react-router-dom";


// ================================
// CONFIGURAÇÃO DAS ROTAS
// ================================

// Cria o router com todas as rotas do app
const router = createBrowserRouter([
  {
    // Rota principal (raiz do app)
    path: "/",

    // Componente base (layout com Navbar, Search, Footer, etc.)
    element: <App />,

    // Página que aparece se algo der erro
    errorElement: <ErrorPage />,

    // Rotas filhas (aparecem dentro do <Outlet /> do App)
    children: [

      // ========================
      // HOME (/)
      // ========================
      {
        // "index: true" significa:
        // essa é a rota padrão da raiz "/"
        index: true,
        element: <Home />,
      },

      // ========================
      // CONTACT (/contact)
      // ========================
      {
        path: "contact",
        element: <Contact />,
      },

      // ========================
      // PRODUCT (/products/:id)
      // ========================
      {
        // :id é um parâmetro dinâmico
        // Ex: /products/5
        path: "products/:id",
        element: <Product />,

        // ROTAS FILHAS (nested routes)
        children: [

          // ========================
          // INFO (/products/:id/info)
          // ========================
          {
            path: "info",
            element: <Info />,
          },
        ],
      },

      // ========================
      // SEARCH (/search?q=algo)
      // ========================
      {
        path: "search",
        element: <Search />,
      },

      // ========================
      // REDIRECIONAMENTO
      // ========================
      {
        // Se acessar /teste → vai pra /
        path: "teste",
        element: <Navigate to="/" />,
      },
    ],
  },
]);


// ================================
// RENDERIZAÇÃO DA APLICAÇÃO
// ================================

// Pega a div com id="root" do index.html
// e injeta toda a aplicação React dentro dela
createRoot(document.getElementById("root")).render(

  // StrictMode ativa verificações extras (ajuda a evitar bugs)
  <StrictMode>

    {/* 
      RouterProvider conecta o React com o sistema de rotas
      Sem isso, nada de navegação funciona
    */}
    <RouterProvider router={router} />

  </StrictMode>,
);