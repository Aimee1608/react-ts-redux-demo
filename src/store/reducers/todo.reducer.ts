import { handleActions as createReducer } from 'redux-actions'
import { modifyTodoIsCompleted, modifyTodoIsEditing, modifyTodoTitle, addTodo, generateTodoId,removeTodo, modifyFilterCondition, clearCompleted } from '../actions/todo.actions'
import {Todo} from './../models/todo'
export interface TodoState{
    filterCondition:string,
    todos: Todo[]
}

const intialState: TodoState = {
    todos:[],
    filterCondition: 'all'
}


export default createReducer(
  {
    [modifyTodoIsCompleted]: (state:TodoState, action) => ({ count: state.count + action.payload }),
    [modifyTodoIsEditing]: (state:TodoState, action) => ({ count: state.count - action.payload }),
    [modifyTodoTitle]:(state:TodoState, action) => ({ count: state.count - action.payload }),
    [addTodo]:(state:TodoState, action)=>({})
  },
  intialState
)
