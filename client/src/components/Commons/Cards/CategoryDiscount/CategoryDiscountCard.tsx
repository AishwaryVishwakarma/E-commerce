import React from 'react'
import styles from './styles.module.scss'
import { type CategoryDiscountData } from '../../../../model'

interface Props {
  cardData: CategoryDiscountData | any
}

const CategoryDiscountCard: React.FC<Props> = ({ cardData }) => {
  const { title, products, cta } = cardData ?? {}

  return (
    <div className={styles.DCWrapper}>
      <p className={styles.title}>{title}</p>
      <div className={styles.productWrapper}>
        {products.map((product: any, idx: number) => (
          <div
            key={idx}
            className={
              product.name ? styles.productInfo : styles.alternateProductInfo
            }
          >
            <img src={product.img} alt="" />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <p className={styles.cta}>{cta}</p>
    </div>
  )
}

export default CategoryDiscountCard
