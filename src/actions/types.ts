import {FetchTodosAction,DeleteTodosAction } from './todos'

export enum ActionTypes{
    fetchTodos,
    deleteTodo
}
export type Action=FetchTodosAction|DeleteTodosAction