import "./../index.css";
import Todo from "./Todo";
import MyHeader from "./MyHeader";
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";

interface Todo {
    id: number,
    todo_text: string,
    is_done: boolean
}



function MyComponent() {


    let [todos , setTodos] = useState<Todo[]>([]);

    let get_todos  = useSelector((state : { todos : { todos : Todo[] }  })   => {                    
        return state.todos.todos;
    });

    useEffect(() => {        
        setTodos(get_todos);
    });


    return (
        <>
            <div className="w-full h-screen bg-slate-900 pt-8 ">
                <div className="bg-white  p-3 max-w-md mx-auto rounded-lg">
                    <MyHeader></MyHeader>
                    <div className="mt-8">
                        <ul>
                            {
                                todos.map((item,index) => <Todo key={index} id={item.id} is_done={item.is_done} todo_text={item.todo_text}></Todo>                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}


export default MyComponent;