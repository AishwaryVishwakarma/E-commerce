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
      <div className={styles.navHeading}>React</div>
      <ul className={styles.navItems}>
        <li>Home</li>
        <li>Services</li>
        <li>Products</li>
        <li>Contact Us</li>
        <li>Sign In</li>
      </ul>
      <label className={styles.toggleLabel}>
        <input
          type="checkbox"
          onChange={setThemeHandler}
          checked={theme === 'dark'}
        />
        <span className={styles.toggleButton} />
        <span className={styles.toggleIcons} />
      </label>
    </nav>
  )
}

export default Navbar
