import React from 'react'
import './InstructionText.css'

const InstructionText = (props) => {
  return (
    <p className='instruction-text2' style={{color: props.color}}>Press down and drag to move through space.</p>
  )
}

export default InstructionText