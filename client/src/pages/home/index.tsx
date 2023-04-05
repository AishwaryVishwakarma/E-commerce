import React from 'react'
import Layout from '../../components/Layout/Layout'
import styles from './styles.module.scss'

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.homeWrapper}>
        <div className={styles.homeHeading}>Home Heading</div>
      </div>
    </Layout>
  )
}

export default HomePage
