import React from 'react'
import Layout from '../../components/Layout/Layout'
import HomeHero from '../../components/Home/HomeHero/HomeHero'
import styles from './styles.module.scss'
import TodaysDeal from '../../components/Home/Today\'s Deal/TodaysDeal'

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomeHero />
      <TodaysDeal />
    </Layout>
  )
}

export default HomePage
