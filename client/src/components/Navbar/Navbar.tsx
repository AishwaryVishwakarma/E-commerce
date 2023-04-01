import React from 'react'
import styles from './Navbar.module.scss'
import { ThemeContext } from '../../App'

const Navbar: React.FC = () => {
  const { theme, setTheme } = React.useContext(ThemeContext) ?? {}
  console.log(theme)

  function setThemeHandler () {
    if (theme === 'light') {
      setTheme?.('dark')
    } else if (theme === 'dark') {
      setTheme?.('light')
    }
  }
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navHeading}>React</h1>
      <ul className={styles.navItems}>
        <li>Home</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
      <button type='button' className={styles.signInButton}>
        Sign-In
      </button>
      <label>
        <input type='checkbox' onClick={setThemeHandler} />
        <span />
        <strong></strong>
      </label>
    </nav>
  )
}

export default Navbar
