export const CHANGE_COMPLETED = 'CHANGE_COMPLETED';
export const CHANGE_ADDPOP = 'CHANGE_ADDPOP';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FILTER = 'FILTER';
export const EDIT_TASK = 'EDIT_TASK';
export const MENU_ACTIVE = 'MENU_ACTIVE';

export function changeCompleted(id) {
  return ({
    type: CHANGE_COMPLETED,
    id
  })
}

export function changePop() {
  return ({
    type: CHANGE_ADDPOP
  })
}

export function handleMenuActive() {
  return ({
    type: MENU_ACTIVE
  })
}

export function toAddTask(title, color) {
  return ({
    type: ADD_TASK,
    title,
    color
  })
}

export function onDeleteTask(id) {
  return ({
    type: DELETE_TASK,
    id
  })
}

export function handleFilter(filter) {
  return ({
    type: FILTER,
    filter
  })
}

export function onEditTask(id, title, color) {
  return ({
    type: EDIT_TASK,
    id,
    title,
    color
  })
}
