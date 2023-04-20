import React from 'react'
import styles from './styles.module.scss'
import { nanoid } from 'nanoid'
import { type TFDummyData } from './../../../model'

const TF_DUMMY_DATA:TFDummyData[] = [
  {
    id: nanoid(),
    title:
      'Mamaearth Ubtan Natural Face Wash For All Skin Type With Turmeric & Saffron For Tan Removal 150 Ml',
    img: 'https://m.media-amazon.com/images/I/51H1dx3ULHL._SX679_.jpg',
    discount: 64,
    selling_price: 2489,
    mrp: 6999,
    deliveryDate: 29
  },
  {
    id: nanoid(),
    title: 'Skybags Brat Black 46 Cms Casual Backpack',
    img: 'https://m.media-amazon.com/images/I/810s53kR8tL._UY741_.jpg',
    discount: 68,
    selling_price: 699,
    mrp: 6999,
    deliveryDate: 29
  },
  {
    id: nanoid(),
    title:
      'beatXP Unbound NEO 1.8" Super AMOLED 2.5D Curved Display, One-Tap BT Calling Smartwatch (Black)',
    img: 'https://m.media-amazon.com/images/I/61xQOD1ZPUL._SX522_.jpg',
    discount: 75,
    selling_price: 1999,
    mrp: 7999,
    deliveryDate: 21
  },
  {
    id: nanoid(),
    title:
      'Nature Prime Natural Premium Mixed Dry Fruits and Nuts 1 Kg [Almonds, Cashew, Kishmish, Apricot, Black Raisins,kiwi] Nuts and Dry Fruits 500 * 2 (Jar pack)',
    img: 'https://m.media-amazon.com/images/I/41fnPBnX5UL.jpg',
    stars: 4,
    discount: 52,
    selling_price: 725,
    mrp: 1499,
    deliveryDate: 23
  },
  {
    id: nanoid(),
    title: 'Apple iPhone 13 (128GB) - (Product) RED',
    img: 'https://m.media-amazon.com/images/I/71gm8v4uPBL._SX679_.jpg',
    stars: 4.5,
    discount: 22,
    selling_price: 61999,
    mrp: 79990,
    deliveryDate: 22
  }
]

const ThirdFold: React.FC = () => {
  return <section className={styles.TFWrapper}>ThirdFold</section>
}

export default ThirdFold
