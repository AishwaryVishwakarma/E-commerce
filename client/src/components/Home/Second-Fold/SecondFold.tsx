import React from 'react'
import styles from './styles.module.scss'
import {
  type CategoryDiscountData,
  KeepShoppingData
} from '../../../model'
import { nanoid } from 'nanoid'
import Card from '../../Commons/Card/Card'

const DISCOUNT_CARD_DETAILS: CategoryDiscountData[] = [
  {
    id: nanoid(),
    title: 'Up to 60% off | Tool & home improvement',
    products: [
      {
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_1a._SY116_CB610512345_.jpg',
        name: 'Spin mops, Wipes & more'
      },
      {
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_2b._SY116_CB610512345_.jpg',
        name: 'Drill Machines, tools & more'
      },
      {
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_3c._SY116_CB610512345_.jpg',
        name: 'Bathroom accessories'
      },
      {
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116._SY116_CB610509523_.jpg',
        name: 'Extension boards, plugs & more'
      }
    ],
    cta: 'See more'
  },
  {
    id: nanoid(),
    title: 'Up to 45% off | Shop by Pet',
    products: [
      {
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Dog_186X116._SY116_CB644270746_.jpg',
        name: 'Dog Supplies'
      },
      {
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Cat_186X116._SY116_CB644270746_.jpg',
        name: 'Cat Supplies'
      },
      {
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/bird_186X116._SY116_CB644270746_.jpg',
        name: 'Birds Supply'
      },
      {
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/fish_186X116._SY116_CB644270746_.jpg',
        name: 'Fish supplies & more'
      }
    ],
    cta: 'See all details'
  }
]

const KEEP_SHOPPING_DETAILS: KeepShoppingData[] = [
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

const SecondFold: React.FC = () => {
  return (
    <section className={styles.SFWrapper}>
      <div className={styles.contentContainer}>
        <Card
          type="review-purchase"
          data={{
            img: 'https://m.media-amazon.com/images/I/51SzLWO7e+L._SR215,215_.jpg'
          }}
        />
        {DISCOUNT_CARD_DETAILS.map((ele, idx) => (
          <Card type="category-discount" key={ele.id} data={ele} />
        ))}
        <Card type="keep-shopping" data={KEEP_SHOPPING_DETAILS} />
      </div>
    </section>
  )
}

export default SecondFold
