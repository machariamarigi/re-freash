import React from "react"
import { ITodo } from "../@types/todo"


type Props = {
    todo: ITodo,
    completeTodo: (id: number) => void
}

const Todo: React.FC<Props> = ({ todo, completeTodo }) => {
    const checkTodo: string = todo.status ? 'line-through' : ''
    return (
        <div className="Card">
            <div className="Card--text">
                <h1 className={checkTodo}>{todo.title}</h1>
                <span className={checkTodo}>{todo.description}</span>
            </div>
            <button 
                className={todo.status ? `hide-button` : 'Card--button'}
                onClick={() => completeTodo(todo.id)}>
                    Complete
            </button>
        </div>
    )
}

export default Todo;
