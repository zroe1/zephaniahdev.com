import './LeftArrow.css'

const LeftArrow = (props) => {
  const switchLeft = () => {
    props.handleSwitchLeft();
  }

  return (
    <button className='LeftArrow' onClick={switchLeft}>{"<-"}</button>
  )
}

export default LeftArrow;