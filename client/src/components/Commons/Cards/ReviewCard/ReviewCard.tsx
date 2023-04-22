import React from 'react'
import styles from './styles.module.scss'
import { BsStar } from 'react-icons/bs'
import { nanoid } from 'nanoid'
import { type Stars } from '../../../../model'

const STARS: Stars[] = [
  {
    element: <BsStar key={nanoid()} className={styles.starsIcon} />
  },
  {
    element: <BsStar key={nanoid()} className={styles.starsIcon} />
  },
  {
    element: <BsStar key={nanoid()} className={styles.starsIcon} />
  },
  {
    element: <BsStar key={nanoid()} className={styles.starsIcon} />
  },
  {
    element: <BsStar key={nanoid()} className={styles.starsIcon} />
  }
]

const ReviewCard: React.FC = () => {
  return (
    <div className={styles.RCWrapper}>
      <p className={styles.title}>Review your purchase</p>
      <div className={styles.product}>
        <img
          src="https://m.media-amazon.com/images/I/51SzLWO7e+L._SR215,215_.jpg"
          alt=""
        />
        <div>{STARS.map((star, idx) => star.element)}</div>
      </div>
      <p className={styles.cta}>See more products to review</p>
    </div>
  )
}

export default ReviewCard
