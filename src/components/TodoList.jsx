import {useDispatch, useSelector} from "react-redux";
import {removeTodo, toggleTodo} from "../store2/todos/todos-actions";
import {selectVisibleTodos} from "../store2/todos/todos-selectors";
import {selectActiveFilter} from "../store2/filters/filter-selector";

const TodoList = () => {
    const activeFilter = useSelector(selectActiveFilter);
    const todos = useSelector(state =>selectVisibleTodos(state, activeFilter));
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.title}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />{" "}
                    {todo.title}{" "}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                </li>
            ))}
        </ul>
    );
};
export default TodoList;