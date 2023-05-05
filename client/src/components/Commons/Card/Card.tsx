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
        return <TodaysDealCard data={data} />
      case 'review-purchase':
        return <ReviewPurchaseCard data={data} />
      case 'category-discount':
        return <CategoryDiscountCard data={data} />
      case 'keep-shopping':
        return <KeepShoppingCard data={data} />
      case 'product-detail':
        return <ProductDetailCard data={data} />
      default:
        return <ProductDetailCard data={data} />
    }
  }

  const cardType = getCardType()

  return cardType
}

export default Card
