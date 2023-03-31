import React from 'react'
import Layout from '../../components/Layout/Layout'
import { type Theme } from '../../model'

const Home: React.FC<{
  changeTheme: Theme
}> = ({ changeTheme }) => {
  const { theme, setTheme } = changeTheme ?? {}

  return (
    <Layout nav={true} theme={theme} setTheme={setTheme}>
      Home
    </Layout>
  )
}

export default Home
