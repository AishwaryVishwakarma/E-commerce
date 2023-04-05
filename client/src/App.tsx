import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { type Utility } from './model'
import useMediaQuery from '../src/hooks/useMediaQuery'
import HomePage from './pages/home/index'
import './App.module.scss'

export const UtilityContext = React.createContext<Utility>({
  theme: 'light',
  setTheme: (theme) => {},
  isMobile: false
})

const router = createBrowserRouter([{ path: '/', element: <HomePage /> }])

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
