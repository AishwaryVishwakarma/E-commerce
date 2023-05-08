import React from 'react'
import Layout from '../../components/Layout/Layout'
import HomeHero from '../../components/Home/HomeHero/HomeHero'
import TodaysDeal from '../../components/Home/First-Fold/FirstFold'
import ThirdFold from '../../components/Home/Third-Fold/ThirdFold'
import ProductSection from '../../components/Home/ProductSection/ProductSection'
import { nanoid } from 'nanoid'
import { ProductSectionData } from '../../model'

const SECOND_FOLD_DATA: ProductSectionData[] = [
  {
    type: 'review-purchase',
    cardData: {
      img: 'https://m.media-amazon.com/images/I/51SzLWO7e+L._SR215,215_.jpg'
    }
  },
  {
    type: 'category-discount',
    cardData: {
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
    }
  },
  {
    type: 'category-discount',
    cardData: {
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
  }
]

const FOURTH_FOLD_DATA: ProductSectionData[] = [
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
  },
  {
    type: 'category-discount',
    cardData: {
      id: nanoid(),
      title: 'Pick Up where you left off',
      products: [
        {
          img: 'https://m.media-amazon.com/images/I/61HHS0HrjpL._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
          img: 'https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
          img: 'https://m.media-amazon.com/images/I/41xHTtB5juL._SX300_SY300_QL70_FMwebp_.jpg'
        },
        {
          img: 'https://m.media-amazon.com/images/I/41WpkxwZ+WL._SY300_SX300_.jpg'
        }
      ]
    }
  }
]

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomeHero />
      <TodaysDeal />
      {/* Second Fold */}
      <ProductSection sectionData={SECOND_FOLD_DATA} />
      <ThirdFold />
      {/* Fourth Fold */}
      <ProductSection sectionData={FOURTH_FOLD_DATA} />
    </Layout>
  )
}

export default HomePage
