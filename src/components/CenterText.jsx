import React from 'react'
import './CenterText.css'
import READMEButton from './READMEButton'

const CenterText = (props) => {
  return (
    <div className='text-container' style={{color: props.color}}>
      <h1>Zephaniah Roe</h1>
      <p>python | tensorflow | systems</p>
      <p>773 - 829 - 6971</p>
      <p>zroe@uchicago.edu</p>
      <READMEButton buttonText='README' />
    </div>
  )
}

export default CenterText