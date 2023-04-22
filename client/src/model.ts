export interface Utility {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
  isMobile: boolean
}

//Today's Deal card (1dt Fold)
export interface TodaysDealCard {
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

interface Product {
  img: string
  name: string
}

//Category Discount Card (2nd Fold)
export interface CategoryDiscountCard {
  id: string
  title: string
  products: Product[]
  cta: string
}

//Keep Shopping Card (2nd Fold)
export interface KeepShoppingCard {
  id: string
  img: string
  name: string
  discount_price: number
  original_price: number
}

//Product Card (3rd Fold)
export interface ProductCard {
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
export interface Card {
  type: string
  data: TodaysDealCard | CategoryDiscountCard | KeepShoppingCard | ProductCard
}
