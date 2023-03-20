import React from "react";
import './Button.css'

const Button = (props) => {
  return (
    <a className='button' href="https://zephyroe.github.io" target="_blank">{props.buttonText}</a>
  )
}

export default Button