import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LegacyApp from "./LegacyApp";
import Home from "./components/Home/Home";
import MarkdownPage from "./components/MarkdownPage";

export default function App() {
  const [showLegacy, setShowLegacy] = useState(false);

  if (showLegacy) return <LegacyApp />;

  return (
    <Routes>
      <Route path="/" element={<Home onViewLegacy={() => setShowLegacy(true)} />} />
      <Route path="/writing/:slug" element={<MarkdownPage />} />
    </Routes>
  );
}
