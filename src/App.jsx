import React, { useState } from "react";
import LegacyApp from "./LegacyApp";
import Home from "./components/Home/Home";

export default function App() {
  const [showLegacy, setShowLegacy] = useState(false);

  if (showLegacy) return <LegacyApp />;

  return <Home onViewLegacy={() => setShowLegacy(true)} />;
}
