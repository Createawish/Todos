import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./store2/todos/todos-actions";
import {allTodos, activeTodos} from './store2/todos/todos-selectors';

import "./index.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <TodoList />
      <Filter/>
    </div>
  );
}




