import './PortfolioItem.css'
import '../Menu.css'

const PortfolioItem = (props) => {
    return (
        <a className="portfolio-item" id={props.id} href="https://www.linkedin.com/in/zephaniahroe/" target="_blank">
            <h2 className="menu-title">{props.itemName}</h2>
            <div className="portfolio-divider"></div>
            <p><span className='portfolio-item-status'>Status:</span> complete</p>
            <p>blah blah blah blah blah blah blah</p>
        </a>
    )
}

export default PortfolioItem;