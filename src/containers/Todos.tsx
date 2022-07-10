import React from "react"
import { ITodo, TodoContextType } from "../@types/todo"
import Todo from "../components/Todo";
import { TodoContext } from "../context/todoContext"

const Todos = () => {
    const {  todos, completeTodo} = React.useContext(TodoContext) as TodoContextType;

    return(
        <>
        {
            todos.map((todo: ITodo) => (
                <Todo key={todo.id} completeTodo={completeTodo} todo={todo} />
            ))
        }
        </>
    )
}

export default Todos;
