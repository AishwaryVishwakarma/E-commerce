import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.module.scss'
import Home from './pages/home/index'
import { type Utility } from './model'
import useMediaQuery from '../src/hooks/useMediaQuery'

export const UtilityContext = React.createContext<Utility>({
  theme: 'light',
  setTheme: (state) => state, 
  isMobile: false
})

const router = createBrowserRouter([{ path: '/', element: <Home /> }])

const App: React.FC = () => {
  const [theme, setTheme] = React.useState<string>('light')

  const isMobile = useMediaQuery('(max-width: 800px)')

  return (
    <UtilityContext.Provider value={{ theme, setTheme, isMobile }}>
      <RouterProvider router={router} />
    </UtilityContext.Provider>
  )
}

export default App
