import React, { useState } from "react"
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import './Menu.css'

const Menu = (props) => {
  const [isPortfolioSelected, setIsPortfolioSelected] = useState(false);

  const redeclareIsPortfolioSelected = () => {
    setIsPortfolioSelected(true);
  }

  return (
    <div>
      {!isPortfolioSelected && <div className="test">
        <div className="menu-item" id="portfolio" onClick={redeclareIsPortfolioSelected}>
          Portfolio
        </div>
        <a className="menu-item"  id="resume" href="https://docs.google.com/document/d/13v9_JG2TeXQJmx2OnifMUYJrlVzoWrazk1Un0m4iyGE/edit?usp=sharing" target="_blank">
            Resume
        </a>
        <div className="menu-item" id="productivity">
          Productivity
          <p id="productivity-coming-soon">coming soon...</p>
        </div>
      </div>}

      {isPortfolioSelected && <div className="test">
        {/* <a className="menu-item"  id="portfolio" href="https://github.com/zroe1" target="_blank">
          Github
        </a> */}
        <PortfolioItem id="portfolio" itemName={"tinyfilter"}/>
        <PortfolioItem id="resume" itemName={"roestories"}/>
        <PortfolioItem id="productivity" itemName={"LinkedIn"}/>
      </div>}
    </div>
  )

}
  
  export default Menu