import './../index.css';
import { addNewTodo } from "./../store/slices/Todos";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./../store/store";
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";

interface Todo {
    id: number,
    todo_text: string,
    is_done: boolean
}



function MyHeader() {

    let dispatch = useDispatch<AppDispatch>();

    let [todos, setTodos] = useState<Todo[]>([]);
    let [newTodo, setNewTodo] = useState<string>("");

    let get_todos = useSelector((state: { todos: { todos : Todo[]} }) => {
        return state.todos.todos;
    });

    useEffect(() => {
        setTodos(get_todos);
    });

    let get_user_data = (e : any) => {
        setNewTodo(e.target.value)
    }

    let add = () => {
        
        let end_todo = todos[todos.length - 1];
        

        dispatch(addNewTodo({
            id : end_todo.id + 1,
            todo_text : newTodo,
            is_done : false
        }));

        setNewTodo("")
    }

    return (
        <>
            <div className="text-cente flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold">ToDo App</h1>
                <div className="mt-4 flex justify-around items-center">
                    <input
                        className="w-80 outline-none h-[50px] border-b-2 border-gray-500 text-black"
                        type="text" placeholder="Enter your task here"
                        onChange={get_user_data}
                        value={newTodo}                
                    />
                    <button
                        className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
                        onClick={add}
                    >
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </>
    )
}


export default MyHeader;