import { combineReducers } from 'redux'
import CounterReducer from './counter.reducer'

 const rootReducer = combineReducers({
    counter: CounterReducer
  })
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;
