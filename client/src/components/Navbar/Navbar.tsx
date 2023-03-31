import React from 'react'
import { type Theme } from '../../model'
import styles from './Navbar.module.scss'

const Navbar: React.FC<Theme> = ({ theme, setTheme }) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navHeading}>
        React<i className={`fab fa-react ${styles.navLogo}`}></i>
      </h1>
      <ul className={styles.navItems}>
        <li>Home</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
      <button type='button' className={styles.signupButton}>
        Sign-Up
      </button>
    </nav>
  )
}

export default Navbar
