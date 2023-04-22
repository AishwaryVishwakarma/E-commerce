import React from 'react'
import styles from './styles.module.scss'
import { type KeepShoppingData } from '../../../../model'
import { nanoid } from 'nanoid'

const KEEP_SHOPPING_DATA: KeepShoppingData[] = [
  {
    id: nanoid(),
    img: 'https://m.media-amazon.com/images/I/31pAe23ncfL._SX300_SY300_QL70_FMwebp_.jpg',
    name: 'OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life (Magico Black)',
    discount_price: 1999,
    original_price: 2299
  },
  {
    id: nanoid(),
    img: 'https://m.media-amazon.com/images/I/31vicK3KHoL.jpg',
    name: '(Renewed) Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones With Mic (Blue)',
    discount_price: 1799,
    original_price: 2690
  },
  {
    id: nanoid(),
    img: 'https://m.media-amazon.com/images/I/514NPRZ1AQL._SX679_.jpg',
    name: 'OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)',
    discount_price: 2799,
    original_price: 2999
  },
  {
    id: nanoid(),
    img: 'https://m.media-amazon.com/images/I/41fPVOJpc+L._SY300_SX300_.jpg',
    name: 'boAt Rockerz 558 Sunburn Edition with 50MM Drivers, 20 Hours Playback, Physical Noise Isolation and Soft Padded Earcups Over Ear Wireless Headphone(Cosmic Black)',
    discount_price: 1999,
    original_price: 4999
  }
]

const KeepShoppingCard: React.FC = () => {
  const [displayProduct, setDisplayProduct] = React.useState<KeepShoppingData>(
    KEEP_SHOPPING_DATA[0]
  )

  const changeDisplayProduct = (id: string) => {
    const filterProduct = KEEP_SHOPPING_DATA.filter(
      (product) => id === product.id
    )
    setDisplayProduct(filterProduct[0])
  }

  return (
    <div className={styles.KSWrapper}>
      <p className={styles.title}>Keep shopping for</p>
      <div className={styles.productInfo}>
        <img src={displayProduct.img} alt="" />
        <p>{displayProduct.name}</p>
        <div className={styles.priceSection}>
          <span className={styles.discountPrice}>
            Rs. {displayProduct.discount_price}
          </span>
          <span className={styles.originalPrice}>
            Rs. {displayProduct.original_price}
          </span>
        </div>
      </div>
      <div className={styles.imagesContainer}>
        {KEEP_SHOPPING_DATA.map((product) => (
          <div
            key={product.id}
            className={`${styles.imageBox} ${
              product.id === displayProduct.id && styles.selected
            }`}
            onClick={() => changeDisplayProduct(product.id)}
          >
            <img src={product.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default KeepShoppingCard
