import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Countries from "./components/Countries.jsx";
import Details from "./components/Details.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/countries" element={<Countries />}>
          <Route path="/countries/:cca2" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);