import React, { useState } from "react";
import "./Home.css";
import Footnote from "../Footnote/Footnote";
import { FootnoteProvider } from "../Footnote/FootnoteProvider";
import Footnotes from "../Footnote/Footnotes";
import subliminalLearning from "../../assets/subliminal_learning.png";
import tms from "../../assets/tms.jpeg";
import jailbreak from "../../assets/jailbreak.png";
import lm from "../../assets/lm.png";

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
  {
    title: "Save UChicago",
    blurb: "Static site for a student organization I help run.",
    href: "https://saveuchicago.com/",
  },
];

const WRITING = [
  {
    title: "Early Theory for Subliminal Learning",
    summary: "I introduce a simple geometric theory for subliminal learning.",
    href: "/writing/subliminal",
    image: subliminalLearning,
  },
  {
    title: "Thoughts on Hand Crafting Language Models",
    summary: "I discuss the potential of hand crafting language models.",
    href: "/writing/handcrafting",
    image: lm,
  },
  {
    title: "Intriguing Properties of gpt-oss Jailbreaks",
    summary: "We explore the properties of gpt-oss jailbreaks.",
    href: "/writing/jailbreak",
    image: jailbreak,
  },
  {
    title: "Alternative Models of Superposition",
    summary: "We fit dozens of features in 2D space.",
    href: "https://github.com/zroe1",
    image: tms,
  },
  // {
  //   title: "On learning, alignment, and engineering",
  //   href: "https://www.linkedin.com/in/zephaniahroe/",
  // },
];

export const renderNameWithNeonLetters = (name) => {
  const numColors = 7;
  let letterIndex = 0;
  return name.split("").map((char, index) => {
    let colorClass = "";
    if (char.trim() !== "") {
      colorClass = `neon-color-${(letterIndex % numColors) + 1}`;
      letterIndex++;
    }
    return (
      <span key={index} className={`neon-letter ${colorClass}`}>
        {char}
      </span>
    );
  });
};

export default function Home({ onViewLegacy }) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const baseProjects = PROJECTS.slice(0, 6);
  const extraProjects = PROJECTS.slice(6);
  const canExpand = extraProjects.length > 0 && !showAllProjects;

  return (
    <FootnoteProvider>
      <div className="home-root">
        <header className="home-hero">
          <h1 className="home-title">{renderNameWithNeonLetters("Zephaniah Roe")}</h1>
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
            <a id="linklike" onClick={onViewLegacy}>
              View 2024 version of this site
            </a>
          </nav>
        </header>

        <main className="home-content">
          <section id="about" className="home-section">
            <h2>{renderNameWithNeonLetters("About Me")}</h2>
            <div className="neon-underline"></div>
            <p className="text-blurb">
              I'm Zephaniah
              <Footnote content="I also go by Zephy." /> Roe, a UChicago senior studying Computer
              Science. I work at the{" "}
              <a className="text-blurb-link" href="https://xrisk.uchicago.edu/">
                University of Chicago XLab
              </a>{" "}
              where I study AI Security and Safety.
            </p>
            <p className="text-blurb">
              Previously, I've worked at{" "}
              <a className="text-blurb-link" href="https://justicetext.com/">
                JusticeText
              </a>
              , a company which uses AI to analyze evidence for public defenders to encourage
              accounability in policing. I also developed an AI powered pipeline for the{" "}
              <a className="text-blurb-link" href="https://harris.uchicago.edu/">
                UChicago Harris School
              </a>{" "}
              to analyze scraped Afghanistan government documents for the purpose of tracking
              Taliban hiring paterns in government.
            </p>
            <p className="text-blurb">
              I have lived in the Chicago area my entire life but only in neighborhoods that end
              with "Park": Lincoln Park, Oak Park and Hyde Park. I'm currenty looking for jobs and
              am willing to relocate, even if that means sacrificing my strict geographic brand
              consistency.
            </p>
          </section>

          <section id="writing" className="home-section">
            <h2>{renderNameWithNeonLetters("Writing")}</h2>
            <div className="neon-underline"></div>
            <ul className="writing-list">
              {WRITING.map((w) => (
                <li key={w.title} className="writing-item">
                  <a
                    href={w.href}
                    className="writing-link"
                    target={w.href.startsWith("http") ? "_blank" : ""}
                    rel="noreferrer">
                    {w.image && (
                      <img className="writing-thumb" src={w.image} alt={w.title} loading="lazy" />
                    )}
                    <div className="writing-meta">
                      <div className="writing-title">{w.title}</div>
                      {w.summary && <div className="writing-summary">{w.summary}</div>}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section id="projects" className="home-section">
            <h2>{renderNameWithNeonLetters("Projects")}</h2>
            <div className="neon-underline"></div>
            <ul className="card-grid">
              {baseProjects.map((p) => (
                <li key={p.title} className="card">
                  <a href={p.href} target="_blank" rel="noreferrer" className="card-link">
                    <div className="card-title">{p.title}</div>
                    <div className="card-blurb">{p.blurb}</div>
                  </a>
                </li>
              ))}
            </ul>
            {extraProjects.length > 0 && (
              <div className={`expandable ${showAllProjects ? "open" : ""}`}>
                <ul className="card-grid">
                  {extraProjects.map((p) => (
                    <li key={p.title} className="card">
                      <a href={p.href} target="_blank" rel="noreferrer" className="card-link">
                        <div className="card-title">{p.title}</div>
                        <div className="card-blurb">{p.blurb}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {(canExpand || showAllProjects) && (
              <div className="projects-actions">
                <button className="view-more" onClick={() => setShowAllProjects((v) => !v)}>
                  {showAllProjects ? "View less" : "View more"}
                </button>
              </div>
            )}
          </section>

          <Footnotes />
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
    </FootnoteProvider>
  );
}
