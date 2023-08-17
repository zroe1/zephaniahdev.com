import React, { useState } from "react"
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import './Menu.css'
import RightArrow from "./Arrows/RightArrow/RightArrow";
import LeftArrow from "./Arrows/LeftArrow/LeftArrow";

const Menu = (props) => {
  const [isPortfolioSelected, setIsPortfolioSelected] = useState(false);
  const [menuPage, setMenuPage] = useState(0);

  const redeclareIsPortfolioSelected = () => {
    setIsPortfolioSelected(true);
  }

  const switchLeft = () => {
    console.log("switch left!");
    if (menuPage == 1) {
        setMenuPage(0)
    }
    if (menuPage == 2) {
      setMenuPage(1)
    }
  }

  const switchRight = () => {
    console.log("switch right!");
    if (menuPage == 0) {
        setMenuPage(1)
    }
    if (menuPage == 1) {
      setMenuPage(2)
    }
  }

  const menuItemColor = {
    backgroundColor: props.menuBackground,
    color: props.textColor,
  }

  return (
    <div>
      {!isPortfolioSelected && <div className="menu-container">
        <div className="menu-item animationFirst" style={menuItemColor} onClick={redeclareIsPortfolioSelected}>
          Portfolio
        </div>
        <a className="menu-item animationSecond" style={menuItemColor} href="https://docs.google.com/document/d/13v9_JG2TeXQJmx2OnifMUYJrlVzoWrazk1Un0m4iyGE/edit?usp=sharing" target="_blank">
          Resume
        </a>
        <div className="menu-item animationThird" style={menuItemColor}>
          Productivity
          <p id="productivity-coming-soon">coming soon...</p>
        </div>
      </div>}
      {isPortfolioSelected && menuPage == 0 && <div className="menu-container">
        <PortfolioItem  animationNum="animationFirst" itemName={"tinyfilter"} 
                        status={"Version 1.0.1 (stable release 8/7/2023)"}
                        discription={"tinyfilter converts images into ASCII art using the principles of CNNs (convolutional neural networks)."}
                        link={"https://github.com/zroe1/tinyfilter"} itemColor={props.menuBackground} textColor={props.textColor}/>
        <PortfolioItem animationNum="animationSecond" itemName={"roestories"}
                        status={"Completed for release on 7/19/2023"}
                        discription={"A portfolio website for my dad, featuring all his work from the over 30 years he spent in journalism."}
                        link={"https://roestories.com/"} itemColor={props.menuBackground} textColor={props.textColor}/>
        <PortfolioItem animationNum="animationThird" itemName={"MIT 6.S191"}
                        status={"Completed August 9, 2023"}
                        discription={"I took this class (Introduction to Deep Learning) durring the 2023 summer to self-study AI and neural networks."}
                        link={"https://github.com/zroe1/MIT-6.S191"} itemColor={props.menuBackground} textColor={props.textColor}/>
      </div>}
      {isPortfolioSelected && menuPage == 1 && <div className="menu-container">
        <PortfolioItem  animationNum="animationFirst" itemName={"Recreating 2048"} 
                        status={"Completed 6/12/2023"}
                        discription={"Using python I created a TUI for the popular game 2048 and wrote an algorithm that beats the game ~30% of the time."}
                        link={"https://github.com/zroe1/tinyfilter"} itemColor={props.menuBackground} textColor={props.textColor}/>
        <PortfolioItem animationNum="animationSecond" itemName={"Letter predictor"}
                        status={"Completed for release on 6/13/2023"}
                        discription={"Using a linear regression model and publicly available data, my letter predictor predicts the final letter in five-letter words."}
                        link={"https://roestories.com/"} itemColor={props.menuBackground} textColor={props.textColor}/>
        <PortfolioItem animationNum="animationThird" itemName={"zephysballoons.com"}
                        status={"Completed 7/18/23"}
                        discription={"zephysballoons.com is a very simple personal website for my balloon twisting business."}
                        link={"https://github.com/zroe1/zephysballoons.com"} itemColor={props.menuBackground} textColor={props.textColor}/>
      </div>}
      {isPortfolioSelected && menuPage == 2 && <div className="menu-container">
        <PortfolioItem  animationNum="animationFirst" itemName={"Productivity Website"} 
                        status={"Still in progress"}
                        discription={"tinyfilter converts images into ASCII art using the principles of CNNs (convolutional neural networks)."}
                        link={"https://github.com/zroe1/tinyfilter"} itemColor={props.menuBackground} textColor={props.textColor}/>
        <PortfolioItem animationNum="animationSecond" itemName={"Sorting: Rust vs C"}
                        status={"Still in progress"}
                        discription={"A repository where I write common sorting algorithms in Rust and C and compare their preformance."}
                        link={"https://github.com/zroe1/sorting-rust-c"} itemColor={props.menuBackground} textColor={props.textColor}/>
        <PortfolioItem animationNum="animationThird" itemName={"Find unused files"}
                        status={"Completed 7/17/2023"}
                        discription={"Python script that recursivly searchs through directories in a website and tracks references to files to determine which can be safely deleted."}
                        link={"https://github.com/zroe1/find-unused-files-web-dev-6.S191"} itemColor={props.menuBackground} textColor={props.textColor}/>
      </div>}

      {isPortfolioSelected && <>
            {menuPage != 2 && <RightArrow handleSwitchRight={switchRight}/>}
            {menuPage != 0 && <LeftArrow handleSwitchLeft={switchLeft}/>}
        </>}
    </div>
  )

}
  
  export default Menu