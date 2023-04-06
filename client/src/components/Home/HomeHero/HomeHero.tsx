import React from 'react'
import styles from './styles.module.scss'

const HomeHero: React.FC = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroHeading}>Home heading</div>
    </div>
  )
}

export default HomeHero
