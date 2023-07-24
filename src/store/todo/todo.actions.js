import { TODO_ACTIONS } from "./action.keys";

export const addTodoAction = (payload) => ({
    type: TODO_ACTIONS.ADD_TODO,
    payload
})

export const removeTodoAction = (payload) => ({
    type: TODO_ACTIONS.DELETE_TODO,
    payload
})


export const finishTodoAction = (payload, payload2) => ({
    type: TODO_ACTIONS.FINISH_TODO,
    payload,
    payload2
})