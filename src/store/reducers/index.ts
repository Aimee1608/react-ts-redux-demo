import { connectRouter, RouterState } from 'connected-react-router'
import { combineReducers } from 'redux'
import { History } from 'history'
import categoryReducer from './category.reducer'
import { CategoryState } from './../../types/category'
import productReducer from './product.reducer'
import { ProductState } from './../../types/product'

export interface AppState {
  router: RouterState
  category: CategoryState
  product: ProductState
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    category: categoryReducer,
    product: productReducer
  })

export default createRootReducer
