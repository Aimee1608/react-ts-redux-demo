export interface Category {
  _id: string
  name: string
}

export interface CategoryState {
  category: {
    loaded: boolean
    success: boolean
    result: Category[]
  }
}
