import React from 'react'
import { type Theme } from '../../model'
import styles from './Navbar.module.scss'

const Navbar: React.FC<Theme> = ({ theme, setTheme }) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navHeading}>React</h1>
      <ul className={styles.navItems}>
        <li>Home</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
      <button type="button" className={styles.signUpButton}>
        Sign-Up
      </button>
    </nav>
  )
}

export default Navbar
