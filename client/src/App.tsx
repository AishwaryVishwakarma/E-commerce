import React from 'react'
import './App.module.scss'
import Home from './pages/home/index'
import { type Theme } from './model'

export const ThemeContext = React.createContext<Theme | undefined>(undefined)

const App: React.FC = () => {
  const [theme, setTheme] = React.useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
    </ThemeContext.Provider>
  )
}

export default App
