import React from 'react'
import styles from './styles.module.scss'
import ReviewCard from '../../Commons/Cards/ReviewCard/ReviewCard'
import DiscountCard from '../../Commons/Cards/CategoryDiscount/CategoryDiscountCard'
import { type CategoryDiscountCard } from '../../../model'
import { nanoid } from 'nanoid'
import KeepShoppingCard from '../../Commons/Cards/KeepShopping/KeepShoppingCard'

const DISCOUNT_CARD_DETAILS: CategoryDiscountCard[] = [
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

const SecondFold: React.FC = () => {
  return (
    <section className={styles.SFWrapper}>
      <div className={styles.contentContainer}>
        <ReviewCard />
        {DISCOUNT_CARD_DETAILS.map((ele, idx) => (
          <DiscountCard key={ele.id} data={ele}/>
        ))}
        <KeepShoppingCard />
      </div>
    </section>
  )
}

export default SecondFold
