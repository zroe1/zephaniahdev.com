import React, { createContext, useContext, useState } from "react";

const FootnoteContext = createContext();

export function FootnoteProvider({ children }) {
  const [footnotes, setFootnotes] = useState([]);

  const addFootnote = (content) => {
    const id = footnotes.length + 1;
    setFootnotes((prev) => [...prev, { id, content }]);
    return id;
  };

  return (
    <FootnoteContext.Provider value={{ addFootnote, footnotes }}>
      {children}
    </FootnoteContext.Provider>
  );
}

export function useFootnotes() {
  return useContext(FootnoteContext);
}
