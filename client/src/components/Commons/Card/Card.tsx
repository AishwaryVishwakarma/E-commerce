import React from 'react';
import {
  type CategoryDiscountData,
  type KeepShoppingData,
  type GenericCard,
  type ProductDetailData,
  type ReviewPurchaseData,
  type TodaysDealData,
} from '../../../model';
import TodaysDealCard from '../Cards/TodaysDeal/TodaysDealCard';
import ProductDetailCard from '../Cards/ProductDetail/ProductDetailCard';
import ReviewPurchaseCard from '../Cards/ReviewPurchase/ReviewPurchaseCard';
import CategoryDiscountCard from '../Cards/CategoryDiscount/CategoryDiscountCard';
import KeepShoppingCard from '../Cards/KeepShopping/KeepShoppingCard';

const Card: React.FC<GenericCard> = ({type, data}) => {
  const getCardType = (): JSX.Element => {
    switch (type) {
      case 'todays-deal':
        return <TodaysDealCard cardData={data as TodaysDealData} />;
      case 'review-purchase':
        return <ReviewPurchaseCard cardData={data as ReviewPurchaseData} />;
      case 'category-discount':
        return <CategoryDiscountCard cardData={data as CategoryDiscountData} />;
      case 'keep-shopping':
        return <KeepShoppingCard cardData={data as KeepShoppingData} />;
      case 'product-detail':
        return <ProductDetailCard cardData={data as ProductDetailData} />;
      default:
        return <div>Seems Empty!!</div>;
    }
  };

  const cardType = getCardType();

  return cardType;
};

export default Card;
