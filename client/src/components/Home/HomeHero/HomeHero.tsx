import React from 'react'
import styles from './styles.module.scss'
import { faker } from '@faker-js/faker/locale/en'

const HomeHero: React.FC = () => {
  console.log(
    faker.commerce.department() // => "Toys"
  )

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
