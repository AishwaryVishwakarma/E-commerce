import React from 'react'
import { type GenericCard } from '../../../model'
import TodaysDealCard from '../Cards/TodaysDeal/TodaysDealCard'
import ProductDetailCard from '../Cards/ProductDetail/ProductDetailCard'
import ReviewPurchaseCard from '../Cards/ReviewPurchase/ReviewPurchaseCard'
import CategoryDiscountCard from '../Cards/CategoryDiscount/CategoryDiscountCard'
import KeepShoppingCard from '../Cards/KeepShopping/KeepShoppingCard'

const Card: React.FC<GenericCard> = ({ type, data }) => {
  const getCardType = (): JSX.Element => {
    switch (type) {
      case 'todays-deal':
        return <TodaysDealCard cardData={data} />
      case 'review-purchase':
        return <ReviewPurchaseCard cardData={data} />
      case 'category-discount':
        return <CategoryDiscountCard cardData={data} />
      case 'keep-shopping':
        return <KeepShoppingCard cardData={data} />
      case 'product-detail':
        return <ProductDetailCard cardData={data} />
      default:
        return <div>Seems Empty!!</div>
    }
  }

  const cardType = getCardType()

  return cardType
}

export default Card
