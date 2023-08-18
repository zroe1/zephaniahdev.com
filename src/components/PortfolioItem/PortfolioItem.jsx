import './PortfolioItem.css'
import '../Menu.css'

const PortfolioItem = (props) => {
    const itemPropStyles = {
        backgroundColor: props.itemColor,
        color: props.textColor,
    }

    const dividerColor = {
        backgroundColor: props.textColor,
    }

    return (
        <a style={itemPropStyles} className={`portfolio-item ${props.animationNum}`} href={props.link} target="_blank">
            <h2 className="menu-title">{props.itemName}</h2>
            <div style={dividerColor} className="portfolio-divider"></div>
            <p className="portfolioDiscription"><span className='portfolio-item-bold'>Status:</span> {props.status}</p>
            <p className="portfolioDiscription"><span className='portfolio-item-bold'>Discription: </span> 
                {props.discription}
            </p>
        </a>
    )
}

export default PortfolioItem;