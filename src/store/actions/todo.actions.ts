import { createAction } from 'redux-actions'
export const modifyTodoIsCompleted = createAction('modifyTodoIsCompleted')
export const modifyTodoIsEditing = createAction('modifyTodoIsEditing')
export const modifyTodoTitle = createAction('modifyTodoTitle')
export const addTodo = createAction('addTodo')
export const generateTodoId = createAction('generateTodoId')
export const removeTodo = createAction('removeTodo')
export const modifyFilterCondition = createAction('modifyFilterCondition')
export const clearCompleted = createAction('clearCompleted')