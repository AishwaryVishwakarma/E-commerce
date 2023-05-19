import React from 'react';
import styles from './styles.module.scss';
import {type KeepShoppingData} from '../../../../model';

interface CardProp {
  cardData: KeepShoppingData;
}

const KeepShoppingCard: React.FC<CardProp> = ({cardData}) => {
  const [displayProduct, setDisplayProduct] = React.useState(
    cardData.product[0]
  );

  const changeDisplayProduct = (id: string) => {
    const filterProduct = cardData.product.filter(
      (product: any) => id === product.id
    );
    setDisplayProduct(filterProduct[0]);
  };

  return (
    <div className={styles.KSWrapper}>
      <p className={styles.title}>{cardData.cta}</p>
      <div className={styles.productInfo}>
        <img src={displayProduct.img} alt='' />
        <p>{displayProduct.name}</p>
        <div className={styles.priceSection}>
          <span className={styles.discountPrice}>
            Rs. {displayProduct.discount_price}
          </span>
          <span className={styles.originalPrice}>
            Rs. {displayProduct.original_price}
          </span>
        </div>
      </div>
      <div className={styles.imagesContainer}>
        {cardData.product.map((product: any) => (
          <div
            key={product.id}
            className={`${styles.imageBox} ${
              product.id === displayProduct.id && styles.selected
            }`}
            onClick={() => changeDisplayProduct(product.id)}
          >
            <img src={product.img} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeepShoppingCard;
