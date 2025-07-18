// Importation des modules nécessaires
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

// Importation des pages de l'application
import App from "./App";

// Point d'entrée de l'application
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

// Vérification de l'élément racine
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Création de la racine et rendu de l'application
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);