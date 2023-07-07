import React from 'react'
import Button from './Button'
import './BottomLinks.css'
import leetcode from './../assets/leetcode.png'
import linkedin from './../assets/linkedin.png'
import github from './../assets/github.png'

const BottomLinks = () => {
  return (
    <div className='bottom-links'>
      <a href="https://leetcode.com/zroe1/" target='_blank'>
        <img className='logo logo22 bottom-link' src={leetcode} alt="leetcode logo" />
      </a>
      <a href="https://www.linkedin.com/in/zephaniahroe/" target='_blank'>
        <img className='logo bottom-link' src={linkedin} alt="leetcode logo" />
      </a>
      <a href='https://github.com/zroe1' target='_blank'>
        <img className='logo logo3 bottom-link' src={github} alt="leetcode logo" />
      </a>
      <Button className='bottom-link' buttonText='README'/>
      <Button className='bottom-link' buttonText='Old Site'/>
    </div>
  )
}

export default BottomLinks