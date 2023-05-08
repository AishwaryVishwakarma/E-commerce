import React from 'react'
import styles from './styles.module.scss'
import { BsStar } from 'react-icons/bs'
import { nanoid } from 'nanoid'
import { ReviewPurchaseData, type Stars } from '../../../../model'

interface Props {
  cardData: ReviewPurchaseData | any
}

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

const ReviewPurchaseCard: React.FC<Props> = ({ cardData }) => {
  const { img } = cardData ?? {}
  return (
    <div className={styles.RCWrapper}>
      <p className={styles.title}>Review your purchase</p>
      <div className={styles.product}>
        <img src={img} alt="product-image" />
        <div>{STARS.map((star) => star.element)}</div>
      </div>
      <p className={styles.cta}>See more products to review</p>
    </div>
  )
}

export default ReviewPurchaseCard
