import { IconType } from 'react-icons/lib'

export interface Utility {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
  isMobile: boolean
}

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
export interface DCDummyData {
  id: string
  title: string
  products: Product[]
  cta: string
}

export interface KSDummyData {
  id: string
  img: string
  name: string
  discount_price: number
  original_price: number
}
