import { handleActions as createReducer } from 'redux-actions'
import { getCategory, getCategorySuccess, CategoryUnionType } from '../actions/category.actions'
import { CategoryState } from '@/types/category'

const intialState: CategoryState = {
  category: {
    loaded: false,
    success: false,
    result: []
  }
}

export default createReducer(
  {
    [getCategory]: (state: CategoryState, action: CategoryUnionType) => ({
      ...state,
      category: {
        loaded: false,
        success: false,
        result: []
      }
    }),
    [getCategorySuccess]: (state: CategoryState, action: CategoryUnionType) => ({
      ...state,
      category: {
        loaded: true,
        success: true,
        result: action.payload
      }
    })
  },
  intialState
)
