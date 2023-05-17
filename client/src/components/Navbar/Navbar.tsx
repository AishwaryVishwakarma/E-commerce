import React from 'react'
import styles from './styles.module.scss'
import {UtilityContext} from '../../App'
import {NavLink} from 'react-router-dom'
import {nanoid} from 'nanoid'

const NAV_ITEMS = ['Home', 'Service', 'Products', 'Contact Us', "Sign In"]

const Navbar: React.FC = () => {
  const {theme, setTheme, isMobile} = React.useContext(UtilityContext) ?? {}

  function setThemeHandler() {
    theme === 'light' ? setTheme?.('dark') : setTheme?.('light')
  }

  const [isHamMenuOpen, setIsHamMenuOpen] = React.useState(false)

  const [isHamClicked, setIsHamClicked] = React.useState<boolean>(false)

  const listItems = (
    <ul className={styles.navItems}>
      {NAV_ITEMS.map((item) => (
        <li key={nanoid()}>
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? styles.active : '')}
            end
            onClick={() => setIsHamMenuOpen(false)}
          >
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  )

  return (
    <nav
      className={`${styles.navbar} ${theme === 'light' ? styles.light : styles.dark
        }`}
    >
      <div className={styles.navHeading}>React</div>
      {isMobile ? <div
        className={`${styles.hamButton} ${isHamClicked
          ? isHamMenuOpen
            ? styles.closeState
            : styles.openState
          : ''
          }`}
        onClick={() => {
          setIsHamMenuOpen((prevState) => !prevState)
          setIsHamClicked(true)
        }}
      >
        <div className={styles.hamLine}></div>
        <div className={styles.hamLine}></div>
        <div className={styles.hamLine}></div>
      </div> :
        (listItems)
      }
      {isMobile && isHamMenuOpen && (
        <div className={styles.hamMenu}>{listItems}</div>
      )}
      {/* <label className={styles.toggleLabel}>
        <input
          type="checkbox"
          onChange={setThemeHandler}
          checked={theme === 'dark'}
        />
        <span className={styles.toggleButton} />
        <span className={styles.toggleIcons} />
      </label> */}
    </nav>
  )
}

export default Navbar
