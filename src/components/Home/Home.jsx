import React from "react";
import "./Home.css";

const PROJECTS = [
  {
    title: "Gradient Routing",
    blurb:
      "Replication of section 4.1 from Cloud et al. exploring masked gradients to localize computation.",
    href: "https://github.com/zroe1/gradient-routing",
  },
  {
    title: "Protein Classification",
    blurb: "Efficient protein classification using steering vectors from protein language models.",
    href: "https://github.com/zroe1/alt-protein-computational",
  },
  {
    title: "TMS Replication",
    blurb: "Replication of one of the most influential papers in ML interpretability.",
    href: "https://github.com/zroe1/toy-models-of-superposition",
  },
  {
    title: "Conference Website",
    blurb: "Site for an AI alignment conference in Chicago.",
    href: "https://chicagoalignment.com/",
  },
  {
    title: "UChicago AI Safety",
    blurb: "Static site for a student organization I help run.",
    href: "https://uchicagoaisafety.com/",
  },
  {
    title: "tinyfilter",
    blurb: "Convert images to ASCII using ideas from CNNs.",
    href: "https://github.com/zroe1/tinyfilter",
  },
];

const WRITING = [
  {
    title: "Notes on replication work",
    href: "https://github.com/zroe1",
  },
  {
    title: "On learning, alignment, and engineering",
    href: "https://www.linkedin.com/in/zephaniahroe/",
  },
];

export default function Home({ onViewLegacy }) {
  return (
    <div className="home-root">
      <header className="home-hero">
        <h1 className="home-title">Zephaniah Roe</h1>
        <p className="home-tagline">
          Engineer and researcher focused on machine learning, alignment, and simple, reliable
          software.
        </p>
        <nav className="home-nav">
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="/RESUME_2024.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <button className="linklike" onClick={onViewLegacy}>
            View legacy site
          </button>
        </nav>
      </header>

      <main className="home-content">
        <section id="projects" className="home-section">
          <h2>Projects</h2>
          <ul className="card-grid">
            {PROJECTS.map((p) => (
              <li key={p.title} className="card">
                <a href={p.href} target="_blank" rel="noreferrer" className="card-link">
                  <div className="card-title">{p.title}</div>
                  <div className="card-blurb">{p.blurb}</div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="writing" className="home-section">
          <h2>Writing</h2>
          <ul className="link-list">
            {WRITING.map((w) => (
              <li key={w.title}>
                <a href={w.href} target="_blank" rel="noreferrer">
                  {w.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="home-footer">
        <a href="https://github.com/zroe1" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span>·</span>
        <a href="https://www.linkedin.com/in/zephaniahroe/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span>·</span>
        <a href="https://leetcode.com/zroe1/" target="_blank" rel="noreferrer">
          LeetCode
        </a>
      </footer>
    </div>
  );
}
