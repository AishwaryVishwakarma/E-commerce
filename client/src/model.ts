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
