import './PortfolioItem.css'
import '../Menu.css'

const PortfolioItem = (props) => {
    return (
        <a className={`portfolio-item ${props.animationNum}`} href={props.link} target="_blank">
            <h2 className="menu-title">{props.itemName}</h2>
            <div className="portfolio-divider"></div>
            <p><span className='portfolio-item-bold'>Status:</span> {props.status}</p>
            <p><span className='portfolio-item-bold'>Discription: </span> 
                {props.discription}
            </p>
        </a>
    )
}

export default PortfolioItem;