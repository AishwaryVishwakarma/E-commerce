import React from 'react'
import { nanoid } from 'nanoid'
import Card from '../../Commons/Card/Card'
import { CategoryDiscountData, KeepShoppingData } from '../../../model'
import styles from './styles.module.scss'

const KEEP_SHOPPING_DETAILS: KeepShoppingData[] = [
  {
    id: nanoid(),
    cta: 'Keep Shopping for',
    product: [
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
  },
  {
    id: nanoid(),
    cta: 'Pick up where you left off',
    product: [
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
  },
  {
    id: nanoid(),
    cta: 'Continue Shopping for',
    product: [
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
  }
]

const DISCOUNT_CARD_DETAILS: CategoryDiscountData[] = [
  {
    id: nanoid(),
    title: 'Pick Up where you left off',
    products: [
      {
        img: 'https://m.media-amazon.com/images/I/61HHS0HrjpL._AC_UY327_FMwebp_QL65_.jpg',
        
      },
      {
        img: 'https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UY327_FMwebp_QL65_.jpg',
        
      },
      {
        img: 'https://m.media-amazon.com/images/I/41xHTtB5juL._SX300_SY300_QL70_FMwebp_.jpg',
        
      },
      {
        img: 'https://m.media-amazon.com/images/I/41WpkxwZ+WL._SY300_SX300_.jpg',
      }
    ],
  },]

const FourthFold: React.FC = () => {
  return (
    <section className={styles.SFWrapper}>
      <div className={styles.contentContainer}>
        {KEEP_SHOPPING_DETAILS.map((ele, idx) => {
          return <Card type="keep-shopping" data={ele} key={ele.id} />
        })}
        <Card type='category-discount' data={DISCOUNT_CARD_DETAILS[0]} />
      </div>
    </section>
  )
}

export default FourthFold
