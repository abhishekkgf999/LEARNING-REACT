import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'


const Navbar = () => {
    const [theme] = useContext(ThemeDataContext)
  return (
    <div className={theme}>
      <h2>Abhishek</h2>
      <Nav2/>
    </div>
  )
}

export default Navbar
