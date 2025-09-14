import React from "react";
import { useFootnotes } from "./FootnoteProvider";
import "../Home/Home.css"; // Assuming CSS in Home.css

export default function Footnotes() {
  const { footnotes } = useFootnotes();

  if (footnotes.length === 0) return null;

  return (
    <section className="footnotes-section">
      <h3>Footnotes</h3>
      <ol>
        {footnotes.map(({ id, content }) => (
          <li key={id} id={`fn${id}`}>
            {content}
            <a href={`#fnref${id}`}> ↑</a>
          </li>
        ))}
      </ol>
    </section>
  );
}
