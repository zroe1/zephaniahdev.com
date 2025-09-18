import React from "react";
import { useFootnotes } from "./FootnoteProvider";
import "../Home/Home.css"; // Assuming CSS in Home.css
import { renderNameWithNeonLetters } from "../Home/Home";

export default function Footnotes() {
  const { footnotes } = useFootnotes();

  if (footnotes.length === 0) return null;

  return (
    <section className="home-section">
      <h2>{renderNameWithNeonLetters("Footnotes")}</h2>
      <div className="neon-underline"></div>
      <ol>
        {footnotes.map(({ id, content }) => (
          <li key={id} id={`fn${id}`} className="footnote-item">
            {content}
            <a href={`#fnref${id}`}> ↑</a>
          </li>
        ))}
      </ol>
    </section>
  );
}
