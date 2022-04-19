import { handleActions as createReducer } from 'redux-actions'
import { increment, decrement } from '../actions/counter.actions'

export interface CounterState{
  count:number
}

const intialState: CounterState = {
  count: 0
}

export default createReducer(
  {
    [increment]: (state:CounterState, action) => ({ count: state.count + action.payload }),
    [decrement]: (state:CounterState, action) => ({ count: state.count - action.payload })
  },
  intialState
)
