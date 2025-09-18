import React, { useEffect, useRef } from "react";
import { useFootnotes } from "./FootnoteProvider";
import "../Home/Home.css"; // Assuming CSS is added to Home.css for now

export default function Footnote({ content }) {
  const { addFootnote } = useFootnotes();
  const [id, setId] = React.useState(null);
  const isAdded = useRef(false);

  useEffect(() => {
    if (!isAdded.current) {
      const footnoteId = addFootnote(content);
      setId(footnoteId);
      isAdded.current = true;
    }
  }, [addFootnote, content]);

  if (id === null) return null;

  return (
    <>
      <sup id={`fnref${id}`} className="footnote-marker">
        <a href={`#fn${id}`}>{id}</a>
      </sup>
      <div className="sidenote">
        <p style={{ fontFamily: "Libre Baskerville, Georgia, serif", fontSize: "14px" }}>
          {id}. {content}
        </p>
      </div>
    </>
  );
}
