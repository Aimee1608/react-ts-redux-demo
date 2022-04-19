import { takeEvery, put } from 'redux-saga/effects'
import { getCategorySuccess } from '../actions/category.actions'
import axios from '@/utils/request'

import { Category } from '../../types/category'

function* handleGetCategory() {
  let response = yield axios.get<Category[]>(`/categories`)
  yield put(getCategorySuccess(response.data))
}

export default function* categorySaga() {
  // 获取分类列表
  yield takeEvery('getCategory', handleGetCategory)
}
