import React from 'react'
import Navbar from '../Navbar/Navbar'
interface EssentialProps {
  children: React.ReactNode
  nav?: boolean
}

const Layout: React.FC<EssentialProps> = ({ children, nav = true }) => {
  return (
    <div>
      {nav && <Navbar />}
      {children}
    </div>
  )
}

export default Layout
