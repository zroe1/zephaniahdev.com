import React, { useState } from "react"
import './CenterText.css'
import './ClickHereButton.css'

const CenterText = (props) => {
  const [rotation, setRotation] = useState(0);

  const changeRotation = () => {
    setRotation(0.3);
    props.handleRotationChange(0.3);
  }

  return (
    <div className='text-container' style={{color: props.color}}>
      <h1 className='bold'>Zephaniah Roe</h1>
      <p className='quote'>
        "The internet? We are not intested in it."
        <div className='quote-credit'>-Bill Gates, 1993</div>
      </p>

      <button className='center-button' onClick={changeRotation}>CLICK HERE</button>
    </div>
  )
}

export default CenterText