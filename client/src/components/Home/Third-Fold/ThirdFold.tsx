import React from 'react'
import styles from './styles.module.scss'
import { nanoid } from 'nanoid'
import { type ProductDetailData } from '../../../model'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import Card from '../../Commons/Card/Card'

const TF_DUMMY_DATA: ProductDetailData[] = [
  {
    id: nanoid(),
    title:
      'Mamaearth Ubtan Natural Face Wash For All Skin Type With Turmeric & Saffron For Tan Removal 150 Ml',
    img: 'https://m.media-amazon.com/images/I/51H1dx3ULHL._SX679_.jpg',
    rating: 4.5,
    discount: 64,
    discount_price: 2489.0,
    original_price: 6999.0,
    delivery_date: 'Thursday, 29 April',
    free_delivery: true,
    category: 'Skin Care'
  },
  {
    id: nanoid(),
    title: 'Skybags Brat Black 46 Cms Casual Backpack',
    img: 'https://m.media-amazon.com/images/I/810s53kR8tL._UY741_.jpg',
    rating: 4,
    discount: 68,
    discount_price: 699.0,
    original_price: 6999.0,
    delivery_date: 'Thursday, 29 April',
    category: 'Bags'
  },
  {
    id: nanoid(),
    title:
      'beatXP Unbound NEO 1.8" Super AMOLED 2.5D Curved Display, One-Tap BT Calling Smartwatch (Black)',
    img: 'https://m.media-amazon.com/images/I/61xQOD1ZPUL._SX522_.jpg',
    rating: 4,
    discount: 75,
    discount_price: 1999.0,
    original_price: 7999.0,
    delivery_date: 'Thursday, 29 April',
    category: 'Headphones'
  },
  {
    id: nanoid(),
    title:
      'Nature Prime Natural Premium Mixed Dry Fruits and Nuts 1 Kg [Almonds, Cashew, Kishmish, Apricot, Black Raisins,kiwi] Nuts and Dry Fruits 500 * 2 (Jar pack)',
    img: 'https://m.media-amazon.com/images/I/41fnPBnX5UL.jpg',
    rating: 4,
    discount: 52,
    discount_price: 725.0,
    original_price: 1499.0,
    delivery_date: 'Thursday, 29 April',
    category: 'Nutrition'
  },
  {
    id: nanoid(),
    title: 'Apple iPhone 13 (128GB) - (Product) RED',
    img: 'https://m.media-amazon.com/images/I/71gm8v4uPBL._SX679_.jpg',
    rating: 4.5,
    discount: 22,
    discount_price: 61999.0,
    original_price: 79990.0,
    delivery_date: 'Thursday, 29 April',
    category: 'Mobile Phones'
  },
  {
    id: nanoid(),
    title:
      'Happilo 100% Natural Premium California Dried Almonds 500g Pack Pouch | Premium Badam Giri | High in Fiber & Boost Immunity | Real Nuts | Gluten Free',
    img: 'https://m.media-amazon.com/images/I/713D1eLsaqL._SX679_.jpg',
    rating: 4,
    discount: 30,
    discount_price: 438.0,
    original_price: 625.0,
    delivery_date: 'Thursday, 29 April',
    category: 'Nutrition'
  },
  {
    id: nanoid(),
    title:
      'realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera',
    img: 'https://m.media-amazon.com/images/I/71Ftzmh3XWL._SX679_.jpg',
    rating: 4,
    original_price: 10999.0,
    delivery_date: 'Thursday, 29 April',
    category: 'Mobiles'
  },
  {
    id: nanoid(),
    title: 'Nike Mens Jordan 1 Retro High Sneaker',
    img: 'https://m.media-amazon.com/images/I/71r2cxMMfrL._UX695_.jpg',
    rating: 4,
    discount: 10,
    discount_price: 62850.0,
    original_price: 68999.0,
    delivery_date: 'Thursday, 29 April',
    category: 'Footwear'
  },
  {
    id: nanoid(),
    title:
      'Scitron Advance Whey Protein 1kg (Milk Chocolate) (28.5 Servings, 25.5g Protein, 6g BCAAs, 0g Sugar, 20 Vitamins & Minerals)',
    img: 'https://m.media-amazon.com/images/I/81wjHwILeLL._SX522_.jpg',
    rating: 4,
    original_price: 2199.0,
    delivery_date: 'Thursday, 29 April',
    category: 'Nutrition'
  }
]

const ThirdFold: React.FC = () => {
  let cardsSectionRef = React.useRef<HTMLDivElement | null>(null)

  const scroll = (scrollOffset: number) => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset
    }
  }

  return (
    <div className={styles.TFWrapper}>
      <div className={styles.TFMain}>
        <div ref={cardsSectionRef} className={styles.TFCardsSection}>
          {TF_DUMMY_DATA.map((data) => (
            <Card type='product-detail' key={data.id} data={data} />
          ))}
          <button
            type="button"
            className={styles.prevButton}
            onClick={() => scroll(-1400)}
          >
            <GrFormPrevious />
          </button>
          <button
            type="button"
            className={styles.nextButton}
            onClick={() => scroll(1400)}
          >
            <GrFormNext />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThirdFold
