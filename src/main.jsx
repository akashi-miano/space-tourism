import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./components/Destination.jsx";
import Crew from "./components/Crew.jsx";
import CrewPage from "./components/routes/CrewPage.jsx";
import DestinationPage from "./components/routes/DestinationPage.jsx";
import TechnologyPage from "./components/routes/TechnologyPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/crew" element={<CrewPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
    </Routes>
  </BrowserRouter>
);
