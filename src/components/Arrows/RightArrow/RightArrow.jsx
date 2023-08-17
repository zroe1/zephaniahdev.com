import './RightArrow.css'

const RightArrow = (props) => {
  const switchRight = () => {
    props.handleSwitchRight();
  }

  return (
    <button className='RightArrow' onClick={switchRight}>{"->"}</button>
  )
}

export default RightArrow;