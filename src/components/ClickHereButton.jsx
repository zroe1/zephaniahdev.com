import React from 'react'
import './ClickHereButton.css'

const Button = (props) => {
  const readMeAlert = () => {
    alert(
      'Thank you for veiwing my site.🎉\n Press down anywhere and drag to move...🏃‍♂️\n Make sure to visit the links at the bottom of the page for other information and projects!'
    )
  }
  return <button className='center-button' onClick={readMeAlert}>{props.buttonText}</button>
}

export default Button
