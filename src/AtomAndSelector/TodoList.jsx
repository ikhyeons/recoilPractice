import React from 'react'
import TodoItemCreator from './TodoItemCreator';
import {
    atom,
    useRecoilValue,
    useSetRecoilState,
  } from 'recoil'
import {todoListState} from './atoms'
import {filteredTodoListState} from './selectors'
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilter';

function TodoList() {

    const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />

        {todoList.map((todoItem)=> <TodoItem key = {todoItem.id} item = {todoItem} />)}
    </>
  )
}

export default TodoList