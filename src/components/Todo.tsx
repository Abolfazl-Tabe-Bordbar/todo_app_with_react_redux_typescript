import "./../index.css";
import { useDispatch } from "react-redux";
import { removeTodo, togell } from "./../store/slices/Todos";
import { AppDispatch } from "./../store/store";

interface TodoProps {
    id: number,
    todo_text: string,
    is_done: boolean
}


function Todo(props: TodoProps) {

    let dispatch = useDispatch<AppDispatch>();

    let delTodo = (todoId: number): void => {
        dispatch(removeTodo(todoId))
    }

    let togellTodo = (todoId: number): void => {
        dispatch(togell(todoId))
    }



    return (
        <>
            <li className="p-2 rounded-lg" >
                <div className="flex align-middle flex-row justify-between">
                    <div className="p-2">



                    </div>
                    <div className="p-2">
                        {props.is_done}
                        <p className={`${props.is_done ? 'line-through  text-gray-400' : ''} text-lg `}>{props.todo_text}</p>
                    </div>
                    <button
                        className="flex hover:text-white hover:bg-red-500 text-red-500 border-2 border-red-500 p-2 rounded-lg"
                        onClick={e => delTodo(props.id)}>
                        <span>Remove</span>

                    </button>
                    {
                        !props.is_done
                            ?
                            <button
                                className="flex hover:text-white hover:bg-green-500 text-green-500 border-2 border-green-500 p-2 rounded-lg"
                                onClick={e => togellTodo(props.id)}>
                                <span>Doen</span>

                            </button>
                            :
                            <button
                                className="flex hover:text-white hover:bg-orange-500 text-orange-500 border-2 border-orange-500 p-2 rounded-lg"
                                onClick={e => togellTodo(props.id)}>
                                <span>Undone</span>

                            </button>
                    }
                </div>
                <hr className="mt-2" />
            </li>
        </>
    )

}

export default Todo;