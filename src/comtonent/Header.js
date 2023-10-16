import React from 'react'
import { NavLink } from 'react-router-dom'
import './head-foot.css'

const Header = () => {
  return (
    <>
        <nav>
            <NavLink to='/'>Main</NavLink>
            <NavLink to='/work'>List</NavLink>
            <NavLink to='/about'>Info</NavLink>
        </nav>
    </>
  )
}

export default Header