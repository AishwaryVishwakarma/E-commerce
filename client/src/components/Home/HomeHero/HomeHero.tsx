import React from 'react'
import styles from './styles.module.scss'

const HomeHero: React.FC = () => {

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroHeadingContainer}>
        <div className={styles.heroHeading}>
          One-stop <span>Online-Shopping</span> For all your need
        </div>
        <div className={styles.heroCta}>Shop Now</div>
      </div>
      <div className={styles.heroImageContainer}>
        <img src="https://i.postimg.cc/cJrZ1zhT/Group-5.png" alt="Hero Image" />
      </div>
    </div>
  )
}

export default HomeHero
