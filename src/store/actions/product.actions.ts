import { createAction } from 'redux-actions'
export const getProduct = createAction('getProduct')
export const getProductSuccess = createAction('getProductSuccess')
export const searchProduct = createAction('searchProduct')
export const searchProductSuccess = createAction('searchProductSuccess')
export const filterProduct = createAction('filterProduct')
export const filterProductSuccess = createAction('filterProductSuccess')
export const getProductById = createAction('getProductById')
export const getProductByIdSuccess = createAction('getProductByIdSuccess')
