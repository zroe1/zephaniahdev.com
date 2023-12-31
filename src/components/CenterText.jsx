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
        "The hottest new programming language is English."
        {/* "The hottest new programming  */}
        <div className='quote-credit'>-Andrej Karpathy, 2023</div>
      </p>

      <button className='center-button' onClick={changeRotation}>CLICK HERE</button>
    </div>
  )
}

export default CenterText