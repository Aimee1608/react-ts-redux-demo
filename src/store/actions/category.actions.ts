import { createAction } from 'redux-actions'
import { Category } from '../../types/category'
export interface GetCategoryAction {
  type: string
}

export interface GetCategorySuccessAction {
  type: string
  payload: Category[]
}

export const getCategory = createAction('getCategory')
export const getCategorySuccess = createAction('getCategorySuccess')

export type CategoryUnionType = GetCategoryAction | GetCategorySuccessAction
