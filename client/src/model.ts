export interface Utility {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
  isMobile: boolean
}

//Today's Deal card (1st Fold)
export interface TodaysDealData {
  id: string
  maxDiscount?: number
  fixedDiscount?: number
  timer?: number
  name: string
  image: string
}

export interface Stars {
  element: React.ReactElement
}

//Review Purchase Card (2nd Fold)
export interface ReviewPurchaseData {
  img: string
}

interface Product {
  img: string
  name?: string
}

//Category Discount Card (2nd Fold)
export interface CategoryDiscountData {
  id: string
  title: string
  products: Product[]
  cta?: string
}

export interface KeepShoppingProductData {
  id: string
  img: string
  name: string
  discount_price: number
  original_price: number
}

//Keep Shopping Card (2nd Fold)
export interface KeepShoppingData {
  id: string
  cta: string
  product: KeepShoppingProductData[]
}

//Product Detail Card (3rd Fold)
export interface ProductDetailData {
  id: string
  img: string
  title: string
  rating: number
  discount?: number
  category?: string
  discount_price?: number
  original_price: number
  delivery_date: string
  free_delivery?: boolean
}

//Generic Card
export interface GenericCard {
  type:
    | 'todays-deal'
    | 'review-purchase'
    | 'category-discount'
    | 'keep-shopping'
    | 'product-detail'

  data: any
}
