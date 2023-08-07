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
          {/* <button onClick={readMeAlert}>Portfolio</button> */}
          Portfolio
        </div>
        <div className="menu-item" id="resume">
          Resume
        </div>
        <div className="menu-item" id="productivity">
          Productivity
          <p id="productivity-coming-soon">coming soon...</p>
        </div>
      </div>}

      {isPortfolioSelected && <div className="test">
        <div className="menu-item" id="portfolio">
          Github
        </div>
        <div className="menu-item" id="resume">
          Leetcode
        </div>
        <div className="menu-item" id="productivity">
          LinkedIn
        </div>
      </div>}
    </div>
  )

}
  
  export default Menu