import { Category } from './category'

export interface Product {
  _id: string
  name: string
  price: number
  description: string
  category: Category
  quantity: number
  sold?: number
  photo: FormData
  shipping: boolean
  createdAt: string
}

export interface Price {
  id: number
  name: string
  array: [number?, number?]
}

export interface ProductState {
  createdAt: {
    loaded: boolean
    success: boolean
    products: Product[]
  }
  sold: {
    loaded: boolean
    success: boolean
    products: Product[]
  }
  search: Product[]
  filter: {
    loaded: boolean
    success: boolean
    result: {
      size: number
      data: Product[]
    }
  }
  product: {
    loaded: boolean
    success: boolean
    result: Product
  }
}
