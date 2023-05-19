import {nanoid} from 'nanoid';
import {ProductSectionData} from './model';

export const FIRST_FOLD_DATA: ProductSectionData[] = [
  {
    type: 'todays-deal',
    cardData: [
      {
        id: nanoid(),
        maxDiscount: 62,
        name: 'beatXP Unbound NEO 1.8 Super AMOLED 2.5D Curved Display, One-Tap BT Calling Smartwatch (Black), Get Rs300 Extra Off by Coupons & Get...',
        image:
          'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      },
      {
        id: nanoid(),
        fixedDiscount: 30,
        timer: 38001,
        name: 'Lava Blaze 5G (Glass Green, 6GB RAM, UFS 2.2 128GB Storage) | 5G Ready | 50MP AI Triple Camera | Upto 9GB Expandable RAM | Charger Included | Clean Android (No Bloatware)',
        image:
          'https://m.media-amazon.com/images/I/4151aOEWqAL._SX300_SY300_QL70_FMwebp_.jpg',
      },
      {
        id: nanoid(),
        maxDiscount: 24,
        name: 'Lee Mans T-shirt',
        image:
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: nanoid(),
        fixedDiscount: 15,
        timer: 48045,
        name: 'WeCool Smart 36W Fast Car Charger with Dual USB Port, Qualcomm Certified 3.0 Quick Charge Technology. Compatible with iPhone, Tablets, Smartphones or Other USB Devices. Stylish Car Charger Adapter',
        image: 'https://m.media-amazon.com/images/I/61mBR1VS+gL._SX679_.jpg',
      },
      {
        id: nanoid(),
        maxDiscount: 87,
        name: 'truke Newly Launched Buds Vibe True Wireless in Ear Earbuds with 35dB Real ANC + Quad Mic ENC, 13mm Big Speaker, 4 EQ Modes, 48H Playtime, Fast Charge, 40ms Low Latency, AAC Codec, BT 5.3, IPX5 (Blue)',
        image: 'https://m.media-amazon.com/images/I/61qrgxwXboL._SX679_.jpg',
      },
      {
        id: nanoid(),
        maxDiscount: 50,
        name: 'Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones Up-To 35Hrs Playtime Lightweight, Type-C, Play/Pause Control, 30Mm Driver, Bt Version 5.0 & Voice Assistant Support For Mobiles, with mic - Blue',
        image: 'https://m.media-amazon.com/images/I/51i+LdztEBL._SX679_.jpg',
      },
      {
        id: nanoid(),
        maxDiscount: 47,
        name: 'MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black',
        image: 'https://m.media-amazon.com/images/I/71lVwl3q-kL._SX679_.jpg',
      },
      {
        id: nanoid(),
        maxDiscount: 56,
        name: 'Samsung Dolby Digital Bluetooth Soundbar (HW-T42E/XL, Black, 2.1 Channel)',
        image: 'https://m.media-amazon.com/images/I/71YUCeNf93L._SX569_.jpg',
      },
      {
        id: nanoid(),
        maxDiscount: 58,
        name: 'Oppo Enco M32 with Mic, 10 Mins Charge 20 Hrs Playtime, 28H Battery Life, Bluetooth 5.0 in Ear Wireless Earphone, Noise Cancellation During Calls IP54 Dust & Water Resistant (Green)',
        image: 'https://m.media-amazon.com/images/I/51PVY5idbhL._SX679_.jpg',
      },
      {
        id: nanoid(),
        maxDiscount: 87,
        name: 'Wolpin Toothbrush Holder (Set of 2 Pcs) Plastic Stand for Toothpaste, Comb, Brush, Cream, Lotion Kids Bathroom Cup Drain Waterproof Self-Adhesive, Teddy Bear',
        image: 'https://m.media-amazon.com/images/I/71ItaLs6TeL._SX679_.jpg',
      },
      {
        id: nanoid(),
        maxDiscount: 54,
        name: 'realme Buds Air 3S Bluetooth Truly Wireless in Ear Earbuds, 11mm Triple Titanium Driver, with Mic AI ENC for Calls, Dual Device Pairing, 30hrs Total Playback with Fast Charging (Bass Black)',
        image: 'https://m.media-amazon.com/images/I/61R-dJO92TL._SX679_.jpg',
      },
      {
        id: nanoid(),
        maxDiscount: 47,
        name: 'V-Guard Zenora RO+UV+MB Water Purifier,TDS up to 2000 ppm,8 Stage Purification,World-class RO Membrane & Next Generation UV Chamber,Free PAN India Installation, 1 Yr Comprehensive Warranty-7 Lt, Black',
        image: 'https://m.media-amazon.com/images/I/61N5D3EPQFL._SX466_.jpg',
      },
      {
        id: nanoid(),
        maxDiscount: 79,
        name: 'Parasnath Black Diamond Ladder 5 Step Heavy Folding Step Ladder with Wide Step 5.1 FT Ladder Made in India',
        image: 'https://m.media-amazon.com/images/I/51UcpofoO+L._SY879_.jpg',
      },
    ],
  },
];

export const SECOND_FOLD_DATA: ProductSectionData[] = [
  {
    type: 'review-purchase',
    cardData: {
      img: 'https://m.media-amazon.com/images/I/51SzLWO7e+L._SR215,215_.jpg',
    },
  },
  {
    type: 'category-discount',
    cardData: {
      id: nanoid(),
      title: 'Up to 60% off | Tool & home improvement',
      products: [
        {
          img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_1a._SY116_CB610512345_.jpg',
          name: 'Spin mops, Wipes & more',
        },
        {
          img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_2b._SY116_CB610512345_.jpg',
          name: 'Drill Machines, tools & more',
        },
        {
          img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116_3c._SY116_CB610512345_.jpg',
          name: 'Bathroom accessories',
        },
        {
          img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/186x116._SY116_CB610509523_.jpg',
          name: 'Extension boards, plugs & more',
        },
      ],
      cta: 'See more',
    },
  },
  {
    type: 'category-discount',
    cardData: {
      id: nanoid(),
      title: 'Up to 45% off | Shop by Pet',
      products: [
        {
          img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Dog_186X116._SY116_CB644270746_.jpg',
          name: 'Dog Supplies',
        },
        {
          img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Cat_186X116._SY116_CB644270746_.jpg',
          name: 'Cat Supplies',
        },
        {
          img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/bird_186X116._SY116_CB644270746_.jpg',
          name: 'Birds Supply',
        },
        {
          img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/fish_186X116._SY116_CB644270746_.jpg',
          name: 'Fish supplies & more',
        },
      ],
      cta: 'See all details',
    },
  },
  {
    type: 'keep-shopping',
    cardData: {
      id: nanoid(),
      cta: 'Keep shopping',
      product: [
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/31pAe23ncfL._SX300_SY300_QL70_FMwebp_.jpg',
          name: 'OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life (Magico Black)',
          discount_price: 1999,
          original_price: 2299,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/31vicK3KHoL.jpg',
          name: '(Renewed) Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones With Mic (Blue)',
          discount_price: 1799,
          original_price: 2690,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/514NPRZ1AQL._SX679_.jpg',
          name: 'OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)',
          discount_price: 2799,
          original_price: 2999,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/41fPVOJpc+L._SY300_SX300_.jpg',
          name: 'boAt Rockerz 558 Sunburn Edition with 50MM Drivers, 20 Hours Playback, Physical Noise Isolation and Soft Padded Earcups Over Ear Wireless Headphone(Cosmic Black)',
          discount_price: 1999,
          original_price: 4999,
        },
      ],
    },
  },
];

export const THIRD_FOLD_DATA: ProductSectionData[] = [
  {
    type: 'product-detail',
    cardData: [
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
        category: 'Skin Care',
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
        category: 'Bags',
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
        category: 'Headphones',
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
        category: 'Nutrition',
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
        category: 'Mobile Phones',
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
        category: 'Nutrition',
      },
      {
        id: nanoid(),
        title:
          'realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera',
        img: 'https://m.media-amazon.com/images/I/71Ftzmh3XWL._SX679_.jpg',
        rating: 4,
        original_price: 10999.0,
        delivery_date: 'Thursday, 29 April',
        category: 'Mobiles',
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
        category: 'Footwear',
      },
      {
        id: nanoid(),
        title:
          'Scitron Advance Whey Protein 1kg (Milk Chocolate) (28.5 Servings, 25.5g Protein, 6g BCAAs, 0g Sugar, 20 Vitamins & Minerals)',
        img: 'https://m.media-amazon.com/images/I/81wjHwILeLL._SX522_.jpg',
        rating: 4,
        original_price: 2199.0,
        delivery_date: 'Thursday, 29 April',
        category: 'Nutrition',
      },
    ],
  },
];

export const FOURTH_FOLD_DATA: ProductSectionData[] = [
  {
    type: 'keep-shopping',
    cardData: {
      id: nanoid(),
      cta: 'Keep Shopping for',
      product: [
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/31pAe23ncfL._SX300_SY300_QL70_FMwebp_.jpg',
          name: 'OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life (Magico Black)',
          discount_price: 1999,
          original_price: 2299,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/31vicK3KHoL.jpg',
          name: '(Renewed) Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones With Mic (Blue)',
          discount_price: 1799,
          original_price: 2690,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/514NPRZ1AQL._SX679_.jpg',
          name: 'OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)',
          discount_price: 2799,
          original_price: 2999,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/41fPVOJpc+L._SY300_SX300_.jpg',
          name: 'boAt Rockerz 558 Sunburn Edition with 50MM Drivers, 20 Hours Playback, Physical Noise Isolation and Soft Padded Earcups Over Ear Wireless Headphone(Cosmic Black)',
          discount_price: 1999,
          original_price: 4999,
        },
      ],
    },
  },
  {
    type: 'keep-shopping',
    cardData: {
      id: nanoid(),
      cta: 'Pick up where you left off',
      product: [
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/31pAe23ncfL._SX300_SY300_QL70_FMwebp_.jpg',
          name: 'OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life (Magico Black)',
          discount_price: 1999,
          original_price: 2299,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/31vicK3KHoL.jpg',
          name: '(Renewed) Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones With Mic (Blue)',
          discount_price: 1799,
          original_price: 2690,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/514NPRZ1AQL._SX679_.jpg',
          name: 'OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)',
          discount_price: 2799,
          original_price: 2999,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/41fPVOJpc+L._SY300_SX300_.jpg',
          name: 'boAt Rockerz 558 Sunburn Edition with 50MM Drivers, 20 Hours Playback, Physical Noise Isolation and Soft Padded Earcups Over Ear Wireless Headphone(Cosmic Black)',
          discount_price: 1999,
          original_price: 4999,
        },
      ],
    },
  },
  {
    type: 'keep-shopping',
    cardData: {
      id: nanoid(),
      cta: 'Continue Shopping for',
      product: [
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/31pAe23ncfL._SX300_SY300_QL70_FMwebp_.jpg',
          name: 'OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life (Magico Black)',
          discount_price: 1999,
          original_price: 2299,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/31vicK3KHoL.jpg',
          name: '(Renewed) Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones With Mic (Blue)',
          discount_price: 1799,
          original_price: 2690,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/514NPRZ1AQL._SX679_.jpg',
          name: 'OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)',
          discount_price: 2799,
          original_price: 2999,
        },
        {
          id: nanoid(),
          img: 'https://m.media-amazon.com/images/I/41fPVOJpc+L._SY300_SX300_.jpg',
          name: 'boAt Rockerz 558 Sunburn Edition with 50MM Drivers, 20 Hours Playback, Physical Noise Isolation and Soft Padded Earcups Over Ear Wireless Headphone(Cosmic Black)',
          discount_price: 1999,
          original_price: 4999,
        },
      ],
    },
  },
  {
    type: 'category-discount',
    cardData: {
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
        },
      ],
    },
  },
];
