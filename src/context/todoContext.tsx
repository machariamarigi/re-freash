import React from "react";
import { ITodo, TodoContextType } from "../@types/todo";

export const TodoContext = React.createContext<TodoContextType | null>(null);

interface Props {
    children: React.ReactNode
}

const TodoProvider: React.FC<Props> = ({ children }) => {
    const [ todos, setTodos ] = React.useState<ITodo[]>([
        {
            id: 1,
            title: 'Post 1',
            description: 'This is description 1',
            status: false
        },
        {
            id: 2,
            title: 'Post 12',
            description: 'This is description 2',
            status: false
        }
    ])

    const saveTodo = (todo: ITodo) => {
        const newTodo: ITodo = {
            id: Math.random(),
            title: todo.title,
            description: todo.description,
            status: false
        }
    
        setTodos([...todos, newTodo])
    }

    const completeTodo = (id: number) => {
        todos.filter((todo: ITodo) => {
            if (todo.id === id) {
                todo.status = true;
                setTodos([...todos])
            }
        })
    }

    return (
        <TodoContext.Provider value={{ todos, saveTodo, completeTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
