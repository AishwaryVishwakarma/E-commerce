import React from 'react'
import styles from './Navbar.module.scss'
import { ThemeContext } from '../../App'

const Navbar: React.FC = () => {
  const { theme, setTheme } = React.useContext(ThemeContext) ?? {}

  function setThemeHandler() {
    theme === 'light' ? setTheme?.('dark') : setTheme?.('light')
  }
  return (
    <nav
      className={`${styles.navbar} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
      <h1 className={styles.navHeading}>React</h1>
      <ul className={styles.navItems}>
        <li>Home</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
      <button type="button" className={styles.signInButton}>
        Sign-In
      </button>
      <label className={styles.toggleLabel}>
        <input type="checkbox" onClick={setThemeHandler} />
        <span />
      </label>
    </nav>
  )
}

export default Navbar
