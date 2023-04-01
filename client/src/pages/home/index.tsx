import React from 'react'
import Layout from '../../components/Layout/Layout'
import styles from './styles.module.scss'

const Home: React.FC = () => {
  return (
    <Layout nav={true}>
      <div className={styles.homeWrapper}>Home</div>
    </Layout>
  )
}

export default Home
