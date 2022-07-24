import React, { FC, ReactElement } from "react";
import AddTodo from "../../components/AddTodo";
import Todos from "../../containers/Todos";
import './TodoPage.css'

const TodoPage : FC<any> = (): ReactElement => {
    return (
        <>
            <h1>My Todos</h1>
            <AddTodo />
            <Todos />
        </>
    )
    
}

export default TodoPage;
