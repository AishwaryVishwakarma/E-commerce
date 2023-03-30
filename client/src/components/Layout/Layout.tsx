import React from 'react'
import Navbar from '../Navbar/Navbar'

interface Children {
  children: React.ReactNode
}

const Layout: React.FC<Children> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <p>This is a layout</p>
      {children}
    </div>
  )
}

export default Layout
