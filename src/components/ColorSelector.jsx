import React, { useState } from "react"
import './ColorSelector.css'

const ColorSelectors = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("#000000")
  const [shapeColor, setShapeColor] = useState("#ffffff")
  const [textColor, setTextColor] = useState('#ffffff')

  const changeBackground = (event) => {
    setBackgroundColor(event.target.value)
    props.handleBackgroundChange(event.target.value)
  }

  const changeShape = (event) => {
    setShapeColor(event.target.value)
    props.handleShapeChange(event.target.value)
  }

  const changeText = (event) => {
    setTextColor(event.target.value)
    props.handleTextChange(event.target.value)
  }

  return (
    <div className='settings'>
      <p className='instruction-text' style={{color: props.color}}>Press down and drag to move through space.</p>
      <p style={{color: props.color}}>Settings:</p>
      <div className='inputs'>
        <input type="color" id="Background" name="Background" value={backgroundColor} onChange={changeBackground} />
        <label htmlFor="Background">Background</label>
        <input type="color" id="ShapeColor" name="ShapeColor" value={shapeColor} onChange={changeShape}/>
        <label htmlFor="ShapeColor">Shape</label>
      </div>
      <div className='inputs'>
        <input type="color" id="Text" name="Text" value={textColor} onChange={changeText}/>
        <label htmlFor="Text">Text</label>
      </div>
    </div>
  )
}

export default ColorSelectors