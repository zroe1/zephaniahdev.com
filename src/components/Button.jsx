import React from "react";
import './Button.css'

// href="https://zephyroe.github.io"

const Button = (props) => {
  return (
    <a className='button' href={props.link} target="_blank">{props.buttonText}</a>
  )
}

export default Button