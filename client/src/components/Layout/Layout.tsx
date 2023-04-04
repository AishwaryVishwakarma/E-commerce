import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
interface EssentialProps {
  children: React.ReactNode
  nav?: boolean
  footer?: boolean
}

const Layout: React.FC<EssentialProps> = ({ children, nav = true, footer=true }) => {
  return (
    <>
      {nav && <Navbar />}
      {children}
      {footer && <Footer />}
    </>
  )
}

export default Layout
