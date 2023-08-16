import React, { useState } from "react"
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import './Menu.css'
import RightArrow from "./Arrows/RightArrow/RightArrow";
import LeftArrow from "./Arrows/LeftArrow/LeftArrow";

const Menu = (props) => {
  const [isPortfolioSelected, setIsPortfolioSelected] = useState(false);

  const redeclareIsPortfolioSelected = () => {
    setIsPortfolioSelected(true);
  }

  return (
    <div>
      {!isPortfolioSelected && <div className="menu-container">
        <div className="menu-item animationFirst" onClick={redeclareIsPortfolioSelected}>
          Portfolio
        </div>
        <a className="menu-item animationSecond" href="https://docs.google.com/document/d/13v9_JG2TeXQJmx2OnifMUYJrlVzoWrazk1Un0m4iyGE/edit?usp=sharing" target="_blank">
            Resume
        </a>
        <div className="menu-item animationThird" >
          Productivity
          <p id="productivity-coming-soon">coming soon...</p>
        </div>
      </div>}

      {isPortfolioSelected && <div className="menu-container">
        <PortfolioItem  animationNum="animationFirst" itemName={"tinyfilter"} 
                        status={"Version 1.0.1 (stable release 8/7/2023)"}
                        discription={"tinyfilter converts images into ASCII art using the principles of CNNs (convolutional neural networks)."}
                        link={"https://github.com/zroe1/tinyfilter"}/>
        <PortfolioItem animationNum="animationSecond" itemName={"roestories"}
                        status={"Completed for release on 7/19/2023"}
                        discription={"a portfolio website for my dad, featuring all his work from the over 30 years he spent in journalism."}
                        link={"https://roestories.com/"}/>
        <PortfolioItem animationNum="animationThird" itemName={"MIT 6.S191"}
                        status={"Completed August 9, 2023"}
                        discription={"I took this class (Introduction to Deep Learning) durring the 2023 summer to self-study AI and neural networks."}
                        link={"https://github.com/zroe1/MIT-6.S191"}/>
        <RightArrow />
        <LeftArrow />
      </div>}
    </div>
  )

}
  
  export default Menu