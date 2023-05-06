import React from 'react'
import Layout from '../../components/Layout/Layout'
import HomeHero from '../../components/Home/HomeHero/HomeHero'
import styles from './styles.module.scss'
import TodaysDeal from '../../components/Home/First-Fold/FirstFold'
import SecondFold from '../../components/Home/Second-Fold/SecondFold'
import ThirdFold from '../../components/Home/Third-Fold/ThirdFold'
import FourthFold from '../../components/Home/Fourth-Fold/FourthFold'

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomeHero />
      <TodaysDeal />
      <SecondFold />
      <ThirdFold />
      <FourthFold/>
    </Layout>
  )
}

export default HomePage
