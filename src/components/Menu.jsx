import React, { useState } from "react"
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
        <a className="menu-item"  id="portfolio" href="https://docs.google.com/document/d/13v9_JG2TeXQJmx2OnifMUYJrlVzoWrazk1Un0m4iyGE/edit?usp=sharing" target="_blank">
          Github
        </a>
        <a className="menu-item"  id="resume" href="https://docs.google.com/document/d/13v9_JG2TeXQJmx2OnifMUYJrlVzoWrazk1Un0m4iyGE/edit?usp=sharing" target="_blank">
          Leetcode
        </a>
        <a className="menu-item"  id="productivity" href="https://docs.google.com/document/d/13v9_JG2TeXQJmx2OnifMUYJrlVzoWrazk1Un0m4iyGE/edit?usp=sharing" target="_blank">
          LinkedIn
        </a>
      </div>}
    </div>
  )

}
  
  export default Menu