import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./store2/todos/todos-actions";
import {allTodos, activeTodos} from './store2/todos/todos-selectors';

import "./index.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import React from "react";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
        <Header/>
      <NewTodo />
      <TodoList />
      <Filter/>
    </div>
  );
}




