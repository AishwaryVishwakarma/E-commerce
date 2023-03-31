import React from 'react'
import './App.module.scss'
import Home from './pages/home/index'

const App: React.FC = () => {
  const [theme, setTheme] = React.useState('light')

  return <Home changeTheme={{ theme, setTheme }} />
}

export default App
