import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import Card from './Card/Card'
import { TDDummyData as DummyData } from '../../../model'

const DUMMY_DATA: DummyData[] = [
  {
    id: nanoid(),
    maxDiscount: 62,
    name: 'beatXP Unbound NEO 1.8 Super AMOLED 2.5D Curved Display, One-Tap BT Calling Smartwatch (Black), Get Rs300 Extra Off by Coupons & Get...',
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
  },
  {
    id: nanoid(),
    fixedDiscount: 30,
    timer: 38001,
    name: 'Lava Blaze 5G (Glass Green, 6GB RAM, UFS 2.2 128GB Storage) | 5G Ready | 50MP AI Triple Camera | Upto 9GB Expandable RAM | Charger Included | Clean Android (No Bloatware)',
    image:
      'https://m.media-amazon.com/images/I/4151aOEWqAL._SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: nanoid(),
    maxDiscount: 24,
    name: 'Lee Mans T-shirt',
    image:
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: nanoid(),
    fixedDiscount: 15,
    timer: 48045,
    name: 'WeCool Smart 36W Fast Car Charger with Dual USB Port, Qualcomm Certified 3.0 Quick Charge Technology. Compatible with iPhone, Tablets, Smartphones or Other USB Devices. Stylish Car Charger Adapter',
    image: 'https://m.media-amazon.com/images/I/61mBR1VS+gL._SX679_.jpg'
  },
  {
    id: nanoid(),
    maxDiscount: 87,
    name: 'truke Newly Launched Buds Vibe True Wireless in Ear Earbuds with 35dB Real ANC + Quad Mic ENC, 13mm Big Speaker, 4 EQ Modes, 48H Playtime, Fast Charge, 40ms Low Latency, AAC Codec, BT 5.3, IPX5 (Blue)',
    image: 'https://m.media-amazon.com/images/I/61qrgxwXboL._SX679_.jpg'
  },
  {
    id: nanoid(),
    maxDiscount: 50,
    name: 'Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones Up-To 35Hrs Playtime Lightweight, Type-C, Play/Pause Control, 30Mm Driver, Bt Version 5.0 & Voice Assistant Support For Mobiles, with mic - Blue',
    image: 'https://m.media-amazon.com/images/I/51i+LdztEBL._SX679_.jpg'
  },
  {
    id: nanoid(),
    maxDiscount: 47,
    name: 'MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black',
    image: 'https://m.media-amazon.com/images/I/71lVwl3q-kL._SX679_.jpg'
  },
  {
    id: nanoid(),
    maxDiscount: 56,
    name: 'Samsung Dolby Digital Bluetooth Soundbar (HW-T42E/XL, Black, 2.1 Channel)',
    image: 'https://m.media-amazon.com/images/I/71YUCeNf93L._SX569_.jpg'
  },
  {
    id: nanoid(),
    maxDiscount: 58,
    name: 'Oppo Enco M32 with Mic, 10 Mins Charge 20 Hrs Playtime, 28H Battery Life, Bluetooth 5.0 in Ear Wireless Earphone, Noise Cancellation During Calls IP54 Dust & Water Resistant (Green)',
    image: 'https://m.media-amazon.com/images/I/51PVY5idbhL._SX679_.jpg'
  },
  {
    id: nanoid(),
    maxDiscount: 87,
    name: 'Wolpin Toothbrush Holder (Set of 2 Pcs) Plastic Stand for Toothpaste, Comb, Brush, Cream, Lotion Kids Bathroom Cup Drain Waterproof Self-Adhesive, Teddy Bear',
    image: 'https://m.media-amazon.com/images/I/71ItaLs6TeL._SX679_.jpg'
  },
  {
    id: nanoid(),
    maxDiscount: 54,
    name: 'realme Buds Air 3S Bluetooth Truly Wireless in Ear Earbuds, 11mm Triple Titanium Driver, with Mic AI ENC for Calls, Dual Device Pairing, 30hrs Total Playback with Fast Charging (Bass Black)',
    image: 'https://m.media-amazon.com/images/I/61R-dJO92TL._SX679_.jpg'
  },
  {
    id: nanoid(),
    maxDiscount: 47,
    name: 'V-Guard Zenora RO+UV+MB Water Purifier,TDS up to 2000 ppm,8 Stage Purification,World-class RO Membrane & Next Generation UV Chamber,Free PAN India Installation, 1 Yr Comprehensive Warranty-7 Lt, Black',
    image: 'https://m.media-amazon.com/images/I/61N5D3EPQFL._SX466_.jpg'
  },
  {
    id: nanoid(),
    maxDiscount: 79,
    name: 'Parasnath Black Diamond Ladder 5 Step Heavy Folding Step Ladder with Wide Step 5.1 FT Ladder Made in India',
    image: 'https://m.media-amazon.com/images/I/51UcpofoO+L._SY879_.jpg'
  }
]

const TodaysDeal: React.FC = () => {
  return (
    <div className={styles.TDWrapper}>
      <div className={styles.TDMain}>
        <div className={styles.TDHeadingContainer}>
          <p>Today's Deals</p>
          <Link to="/">See all deals</Link>
        </div>
        <div className={styles.TDCardsSection}>
          {DUMMY_DATA.map((data) => (
            <Card key={data.id} productData={data}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodaysDeal
