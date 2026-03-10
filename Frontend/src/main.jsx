import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import App from "./App.jsx";

// pages
import Home from "./pages/Home/Home.jsx";
import Films from "./pages/Films/Films.jsx";
import FilmDetails from "./pages/FilmDetails/FilmDetails.jsx";
import Fiction from "./pages/Fiction/Fiction.jsx";
import ScriptReading from "./pages/ScriptReading/ScriptReading.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout (Navbar + Footer + Outlet)
    children: [
      { index: true, element: <Home /> },
      { path: "films", element: <Films /> },
      { path: "films/:slug", element: <FilmDetails /> },
      { path: "fiction", element: <Fiction /> },
      { path: "script-reading", element: <ScriptReading /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
