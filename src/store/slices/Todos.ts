import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Todo {
    id: number,
    todo_text: string,
    is_done: boolean
}




export const counterSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {
                id: 1,
                todo_text: "Test Todo 1 ❤️",
                is_done: false  
            },
            {
                id: 2,
                todo_text: "Test Todo 2 ❤️",
                is_done: true
            }
        ]
    },
    reducers: {
        addNewTodo: (state, actions: PayloadAction<Todo>) => {
            state.todos.push(actions.payload)
        },
        removeTodo: (state, actions: PayloadAction<number>) => {

            let new_todos: Todo[] = []

            state.todos.forEach((todo) => {
                if (todo.id != actions.payload) {
                    new_todos.push(todo)
                }
            })

            state.todos = new_todos;



        },
        togell: (state, actions: PayloadAction<number>) => {
            

            console.log(1);
            

            let new_todos: Todo[] = []

            state.todos.forEach((todo) => {
                if (todo.id == actions.payload) {
                    new_todos.push({
                        id: todo.id,
                        todo_text: todo.todo_text,
                        is_done: !todo.is_done
                    })
                } else {
                    new_todos.push(todo)
                }
            })

            state.todos = new_todos;

        }
    },
})

export const { addNewTodo, removeTodo, togell } = counterSlice.actions

export default counterSlice.reducer