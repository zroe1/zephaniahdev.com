import React from 'react'
import './CenterText.css'
import ClickHereButton from './ClickHereButton'


const CenterText = (props) => {
  return (
    <div className='text-container' style={{color: props.color}}>
      <h1 className='bold'>Zephaniah Roe</h1>
      {/* <p className='interests'>python | tensorflow | systems</p> */}
      <p className='quote'>
      {/* “Simplicity, carried to the extreme, becomes elegance.” */}
        "The internet? We are not intested in it."
        {/* <br />
        -Bill Gates, 1993 */}
        {/* <br /> */}
        <div className='quote-credit'>-Bill Gates, 1993</div>
      </p>

      <ClickHereButton buttonText='CLICK HERE' />
    </div>
  )
}

export default CenterText