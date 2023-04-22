import React from 'react'
import styles from './styles.module.scss'
import { type CategoryDiscountCard } from '../../../../model'

interface Data {
  data: CategoryDiscountCard
}

const DiscountCard: React.FC<Data> = ({ data }) => {
  const { title, products, cta } = data ?? {}

  return (
    <div className={styles.DCWrapper}>
      <p className={styles.title}>{title}</p>
      <div className={styles.productWrapper}>
        {products.map((product, idx) => (
          <div key={idx} className={styles.productInfo}>
            <img src={product.img} alt="" />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <p className={styles.cta}>{cta}</p>
    </div>
  )
}

export default DiscountCard
