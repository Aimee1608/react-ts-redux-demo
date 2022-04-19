import { handleActions as createReducer } from 'redux-actions'
import {
  getProduct,
  getProductSuccess,
  searchProduct,
  searchProductSuccess,
  filterProduct,
  filterProductSuccess,
  getProductById,
  getProductByIdSuccess
} from '../actions/product.actions'

import { ProductState } from '../../types/product'
const intialState: ProductState = {
  createdAt: {
    loaded: false,
    success: false,
    products: []
  },
  sold: {
    loaded: false,
    success: false,
    products: []
  },
  search: [],
  filter: {
    success: false,
    loaded: false,
    result: {
      size: 0,
      data: []
    }
  },
  product: {
    loaded: false,
    success: false,
    result: {
      _id: '',
      name: '',
      price: 0,
      description: '',
      category: {
        _id: '',
        name: ''
      },
      quantity: 0,
      sold: 0,
      photo: new FormData(),
      shipping: false,
      createdAt: ''
    }
  }
}

export default createReducer(
  {
    [getProduct]: (state: ProductState, action) => ({
      ...state,
      [action.sortBy]: {
        ...state[action.sortBy === 'createdAt' ? 'createdAt' : 'sold'],
        loaded: false,
        success: false
      }
    }),
    [getProductSuccess]: (state: ProductState, action) => ({
      ...state,
      [action.sortBy]: {
        loaded: true,
        success: true,
        products: action.payload
      }
    }),
    [searchProductSuccess]: (state: ProductState, action) => ({
      ...state,
      search: action.products
    }),
    [filterProduct]: (state: ProductState, action) => ({
      ...state,
      filter: {
        loaded: false,
        success: false,
        result: {
          size: 0,
          data: state.filter.result.data
        }
      }
    }),
    [filterProductSuccess]: (state: ProductState, action) => {
      let data = action.skip === 0 ? action.payload.data : [...state.filter.result.data, ...action.payload.data]

      return {
        ...state,
        filter: {
          loaded: true,
          success: true,
          result: {
            size: action.payload.size,
            data
          }
        }
      }
    },
    [getProductById]: (state: ProductState, action) => ({
      ...state,
      product: {
        ...state.product,
        loaded: false,
        success: false
      }
    }),
    [getProductByIdSuccess]: (state: ProductState, action) => ({
      ...state,
      product: {
        loaded: true,
        success: true,
        result: action.payload
      }
    })
  },
  intialState
)
