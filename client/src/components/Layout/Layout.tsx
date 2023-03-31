import React from 'react'
import Navbar from '../Navbar/Navbar'
import { type Theme } from '../../model'
interface BasicProps extends Theme {
  children: React.ReactNode
  nav?: boolean
}

const Layout: React.FC<BasicProps> = ({
  children,
  nav = true,
  theme = 'light',
  setTheme
}) => {
  return (
    <div>
      {nav && <Navbar theme={theme} setTheme={setTheme} />}
      <p>This is a layout</p>
      {children}
    </div>
  )
}

export default Layout
