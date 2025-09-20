import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import "./Menu.css";
import RightArrow from "./Arrows/RightArrow/RightArrow";
import LeftArrow from "./Arrows/LeftArrow/LeftArrow";

// Portfolio items data
const PORTFOLIO_ITEMS = [
  {
    itemName: "Gradient Routing",
    status: "In progress",
    description:
      "Replication of section 4.1 of 'Gradient Routing: Masking Gradients to Localize Computation in Neural Networks' by Cloud et al.",
    link: "https://github.com/zroe1/gradient-routing",
  },
  {
    itemName: "Protein Classification",
    status: "Completed 12/15/2024",
    description:
      "A framework for efficient protein classification using steering vectors from protein language models.",
    link: "https://github.com/zroe1/alt-protein-computational",
  },
  {
    itemName: "UChicago AI Safety Website",
    status: "Last update 12/30/2024",
    description:
      "A simple static website for UChicago AI Safety, a student organization I help run.",
    link: "https://uchicagoaisafety.com/",
  },
  {
    itemName: "Conference Website",
    status: "Last update 12/17/2024",
    description: "Website I made for an upcoming AI alignment conference in Chicago.",
    link: "https://chicagoalignment.com/",
  },
  {
    itemName: "Toy Models of Superposition Replication",
    status: "Completed 12/30/2023",
    description: "A replication of one of the most groundbreaking papers in ML research.",
    link: "https://github.com/zroe1/toy-models-of-superposition",
  },
  {
    itemName: "Neural network from scratch",
    status: "Completed 9/11/2023",
    description:
      "Implementation of a fully-functional neural network using only stdio.h and stdlib.h in C.",
    link: "https://github.com/zroe1/neural-network-from-scratch",
  },
  {
    itemName: "Productivity Website",
    status: "Still in progress",
    description: "A website for tracking my productivity over the last four months.",
    link: "https://zephaniahsdata.com/",
  },
  {
    itemName: "tinyfilter",
    status: "Version 1.0.1 (stable release 8/7/2023)",
    description:
      "tinyfilter converts images into ASCII art using the principles of CNNs (convolutional neural networks).",
    link: "https://github.com/zroe1/tinyfilter",
  },
  {
    itemName: "MIT 6.S191",
    status: "Completed 8/9/2023",
    description:
      "I took this class (Introduction to Deep Learning) during the 2023 summer to self-study AI and neural networks.",
    link: "https://github.com/zroe1/MIT-6.S191",
  },
  {
    itemName: "Recreating 2048",
    status: "Completed 6/12/2023",
    description:
      "Using python I created a TUI for the popular game 2048 and wrote an algorithm that beats the game ~30% of the time.",
    link: "https://github.com/zroe1/2048-python",
  },
  {
    itemName: "roestories",
    status: "Completed for release on 7/19/2023",
    description:
      "A portfolio website for my dad, featuring all his work from the over 30 years he spent in journalism.",
    link: "https://roestories.com/",
  },
  {
    itemName: "Sorting: Rust vs C",
    status: "Still in progress",
    description:
      "A repository where I write common sorting algorithms in Rust and C and compare their performance.",
    link: "https://github.com/zroe1/sorting-rust-c",
  },
  {
    itemName: "zephysballoons.com",
    status: "Completed 7/18/23",
    description:
      "zephysballoons.com is a very simple personal website for my balloon twisting business.",
    link: "https://zephysballoons.com/",
  },
  {
    itemName: "Find unused files",
    status: "Completed 7/17/2023",
    description:
      "A Python script that recursively searchs through directories in a website and tracks references to files to determine which can be safely deleted.",
    link: "https://github.com/zroe1/find-unused-files-web-dev",
  },
];

// Number of items to display per page
const ITEMS_PER_PAGE = 3;

const Menu = (props) => {
  const [isPortfolioSelected, setIsPortfolioSelected] = useState(false);
  const [menuPage, setMenuPage] = useState(0);

  const redeclareIsPortfolioSelected = () => {
    setIsPortfolioSelected(true);
  };

  const switchLeft = () => {
    setMenuPage(menuPage - 1);
  };

  const switchRight = () => {
    setMenuPage(menuPage + 1);
  };

  const menuItemColor = {
    backgroundColor: props.menuBackground,
    color: props.textColor,
  };

  const renderPortfolioItems = () => {
    const startIdx = menuPage * ITEMS_PER_PAGE;
    const currentPageItems = PORTFOLIO_ITEMS.slice(startIdx, startIdx + ITEMS_PER_PAGE);
    const animations = ["animationFirst", "animationSecond", "animationThird"];

    return currentPageItems.map((item, index) => (
      <PortfolioItem
        key={item.itemName}
        animationNum={animations[index]}
        itemName={item.itemName}
        status={item.status}
        discription={item.description}
        link={item.link}
        itemColor={props.menuBackground}
        textColor={props.textColor}
      />
    ));
  };

  const maxPages = Math.ceil(PORTFOLIO_ITEMS.length / ITEMS_PER_PAGE) - 1;

  return (
    <div>
      {!isPortfolioSelected && (
        <div className="menu-container">
          <div
            className="menu-item animationFirst"
            style={menuItemColor}
            onClick={redeclareIsPortfolioSelected}>
            Portfolio
          </div>
          <a
            className="menu-item animationSecond"
            style={menuItemColor}
            href="https://zephaniahsdata.com/"
            target="_blank">
            Productivity
          </a>
          <a
            className="menu-item animationThird"
            style={menuItemColor}
            href="RESUME_2025_zephaniah_roe.pdf"
            target="_blank">
            Resume
          </a>
        </div>
      )}

      {isPortfolioSelected && (
        <>
          <div className="menu-container">{renderPortfolioItems()}</div>
          {menuPage < maxPages && <RightArrow handleSwitchRight={switchRight} />}
          {menuPage > 0 && <LeftArrow handleSwitchLeft={switchLeft} />}
        </>
      )}
    </div>
  );
};

export default Menu;
