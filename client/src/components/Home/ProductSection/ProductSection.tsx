import React from 'react';
import styles from './styles.module.scss';
import Card from '../../Commons/Card/Card';
import {nanoid} from 'nanoid';
import {
  type TodaysDealData,
  type CategoryDiscountData,
  type KeepShoppingData,
  type ProductSectionData,
  type ReviewPurchaseData,
  type ProductDetailData,
} from '../../../model';
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import {Link} from 'react-router-dom';
import {UtilityContext} from '../../../App';

interface Props {
  sectionData: ProductSectionData[];
}

const ProductSection: React.FC<Props> = ({sectionData}) => {
  const {isMobile} = React.useContext(UtilityContext) ?? {};

  let cardsSectionRef = React.useRef<HTMLDivElement | null>(null);

  const scroll = (scrollOffset: number): void => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className={styles.PSectionWrapper}>
      <div className={styles.contentContainer}>
        {sectionData?.map((data) => {
          if (sectionData.length === 1) {
            const {cardData} = data;
            return (
              <div key={nanoid()} className={styles.ScrollableWrapper}>
                <div className={styles.main}>
                  {data.type === 'todays-deal' && (
                    <div className={styles.headingContainer}>
                      <p>Today's Deals</p>
                      <Link to='/'>See all deals</Link>
                    </div>
                  )}
                  <div
                    ref={cardsSectionRef}
                    className={styles.scrollableCardsSection}
                  >
                    {Array.isArray(cardData) &&
                      cardData.map(
                        (
                          singleCardData: TodaysDealData | ProductDetailData
                        ): React.ReactNode => (
                          <Card
                            key={singleCardData.id}
                            type={data.type}
                            data={singleCardData}
                          />
                        )
                      )}
                    {!isMobile && (
                      <>
                        <button
                          type='button'
                          className={styles.prevButton}
                          onClick={(): void => scroll(-1400)}
                        >
                          <GrFormPrevious />
                        </button>
                        <button
                          type='button'
                          className={styles.nextButton}
                          onClick={(): void => scroll(1400)}
                        >
                          <GrFormNext />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
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
          );
        })}
      </div>
    </section>
  );
};

export default ProductSection;
