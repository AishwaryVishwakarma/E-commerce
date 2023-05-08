import React from 'react'
import styles from './styles.module.scss'
import Card from '../../Commons/Card/Card'
import { nanoid } from 'nanoid'
import {
  type CategoryDiscountData,
  type KeepShoppingData,
  type ProductSectionData,
  type ReviewPurchaseData
} from '../../../model'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { Link } from 'react-router-dom'

interface Props {
  sectionData: ProductSectionData[]
}

const ProductSection: React.FC<Props> = ({ sectionData }) => {
  let cardsSectionRef = React.useRef<HTMLDivElement | null>(null)

  const scroll = (scrollOffset: number) => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset
    }
  }

  return (
    <section className={styles.PSectionWrapper}>
      <div className={styles.contentContainer}>
        {sectionData.map((data) => {
          const { cardData } = data
          if (data.type === 'todays-deal') {
            return (
              <div className={styles.TDWrapper}>
                <div className={styles.TDMain}>
                  <div className={styles.TDHeadingContainer}>
                    <p>Today's Deals</p>
                    <Link to="/">See all deals</Link>
                  </div>
                  <div ref={cardsSectionRef} className={styles.TDCardsSection}>
                    {Array.isArray(cardData) &&
                      cardData.map((data: any) => (
                        <Card key={data.id} type="todays-deal" data={data} />
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
          } else if (data.type === 'product-detail') {
            return (
              <div className={styles.TFWrapper}>
                <div className={styles.TFMain}>
                  <div ref={cardsSectionRef} className={styles.TFCardsSection}>
                    {Array.isArray(cardData) &&
                      cardData.map((data) => (
                        <Card type="product-detail" key={data.id} data={data} />
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
          return (
            <Card
              key={nanoid()}
              type={data.type}
              data={
                data.cardData as
                  | ReviewPurchaseData
                  | CategoryDiscountData
                  | KeepShoppingData
              }
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProductSection
