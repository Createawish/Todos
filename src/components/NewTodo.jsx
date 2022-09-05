import {addTodo} from "../store2/todos/todos-actions";
import {useDispatch} from 'react-redux'
import style from './NewTodo.module.css'

const NewTodo = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(event.target.title.value));
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input type="text" name="title" placeholder="Create a new todo" className={style.input} />
            <input type="submit" value="Add Todo" className={style.btn} />
        </form>
    );
};
export default NewTodo;