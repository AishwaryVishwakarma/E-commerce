import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.module.scss'
import Home from './pages/home/index'
import { type Theme } from './model'

export const ThemeContext = React.createContext<Theme | undefined>(undefined)

const router = createBrowserRouter([
  {path: "/", element: <Home />}
])

const App: React.FC = () => {
  const [theme, setTheme] = React.useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
