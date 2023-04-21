export interface Utility {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
  isMobile: boolean
}

//Today's Deal card
export interface TDDummyData {
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

//Discount Card
export interface DCDummyData {
  id: string
  title: string
  products: Product[]
  cta: string
}

//Keep Shopping Card
export interface KSDummyData {
  id: string
  img: string
  name: string
  discount_price: number
  original_price: number
}

//Third Fold Card
export interface TFDummyData {
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
