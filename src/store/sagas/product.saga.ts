import { put, takeEvery } from 'redux-saga/effects'
import { getProductSuccess, searchProductSuccess, filterProductSuccess, getProductByIdSuccess } from '../actions/product.actions'
import axios from '../../utils/request'

import { Product } from '../../types/product'
// /products?sortBy=createdAt&order=asc&limit=10
function* handleGetProduct({ sortBy, order, limit }: GetProductAction) {
  let response = yield axios.get<Product[]>(`/products`, {
    params: { sortBy, order, limit }
  })
  yield put(getProductSuccess(response.data, sortBy))
}

function* handleSearchProduct({ payload: { search, category } }: SearchProductAction) {
  let response = yield axios.get(`/products/search`, {
    params: { search, category }
  })
  yield put(searchProductSuccess(response.data))
}

function* handleFilterProduct(action: FilterProductAction) {
  let response = yield axios.post(`/products/filter`, action.payload)
  yield put(filterProductSuccess(response.data, action.payload.skip))
}

function* handleGetProductById({ payload }: GetProductByIdAction) {
  let response = yield axios.get(`/product/${payload.productId}`)
  yield put(getProductByIdSuccess(response.data))
}

export default function* productSaga() {
  yield takeEvery('getProduct', handleGetProduct)
  yield takeEvery('searchProduct', handleSearchProduct)
  yield takeEvery('filterProduct', handleFilterProduct)
  yield takeEvery('getProductById', handleGetProductById)
}
