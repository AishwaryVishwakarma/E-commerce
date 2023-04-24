import React from 'react'
import { type genericCard } from '../../../model'
import TodaysDealCard from '../Cards/TodaysDeal/TodaysDealCard'
import ProductDetailCard from '../Cards/ProductDetail/ProductDetailCard'
import ReviewPurchaseCard from '../Cards/ReviewPurchase/ReviewPurchaseCard'
import CategoryDiscountCard from '../Cards/CategoryDiscount/CategoryDiscountCard'
import KeepShoppingCard from '../Cards/KeepShopping/KeepShoppingCard'

const Card: React.FC<genericCard> = ({ type, data }) => {
  const getCardType = () => {
    switch (type) {
      case 'todays-deal':
        return <TodaysDealCard data={data} />
      case 'review-purchase':
        return <ReviewPurchaseCard />
      case 'category-discount':
        return <CategoryDiscountCard data={data} />
      case 'keep-shopping':
        return <KeepShoppingCard />
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
