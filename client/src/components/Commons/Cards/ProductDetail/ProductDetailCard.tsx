import React from 'react'
import styles from './styles.module.scss'
import { Stars, type ProductData } from '../../../../model'
import { RiStarFill } from 'react-icons/ri'
import { nanoid } from 'nanoid'

interface Data {
  data: ProductData
}

const STARS: Stars[] = [
  {
    element: <RiStarFill key={nanoid()} className={styles.starsIcon} />
  },
  {
    element: <RiStarFill key={nanoid()} className={styles.starsIcon} />
  },
  {
    element: <RiStarFill key={nanoid()} className={styles.starsIcon} />
  },
  {
    element: <RiStarFill key={nanoid()} className={styles.starsIcon} />
  },
  {
    element: <RiStarFill key={nanoid()} className={styles.starsIcon} />
  }
]

const ProductDetailCard: React.FC<Data> = ({ data }) => {
  const {
    id,
    title,
    img,
    discount,
    discount_price,
    original_price,
    rating,
    delivery_date,
    free_delivery,
    category
  } = data ?? {}

  return (
    <div className={styles.cardWrapper}>
      <img className={styles.prodImage} src={img} alt={title} />
      <div className={styles.productName}>{title}</div>
      <div className={styles.rating}>
        {STARS.map((star, idx) => star.element)}
      </div>
      <>
        {discount ? (
          <div className={styles.blockBusterDeal}>
            <p>{discount}% off</p> <span>BlockBuster of the day</span>
          </div>
        ) : (
          <div className={styles.bestSellerDeal}>
            <img
              className={styles.bestSellerImage}
              src="https://i.postimg.cc/ZRhpvcTZ/best-seller.png"
            />
            <span>in {category}</span>
          </div>
        )}
      </>
      <div className={styles.discountPrice}>
        {discount ? `₹${discount_price}.00` : `₹${original_price}.00`}
      </div>
      <div className={styles.originalPrice}>
        {discount && (
          <p>
            M.R.P: <s>₹{original_price}.00</s>
          </p>
        )}
      </div>
      <div className={styles.freeDelivery}>
        <img src="https://i.postimg.cc/W3BTsZ3C/amazon-prime-icon-1.png" />{' '}
        <p>FREE Delivery</p>
      </div>
      <div className={styles.deliveryDate}>{delivery_date}</div>
    </div>
  )
}

export default ProductDetailCard
