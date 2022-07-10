import React from "react";
import { ITodo, TodoContextType } from "../@types/todo";
import { TodoContext } from "../context/todoContext";

const AddTodo: React.FC = () => {
    const { saveTodo } = React.useContext(TodoContext) as TodoContextType;
    const [ formData, setFormData ] = React.useState<ITodo | {}>()

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
        e.preventDefault();
        saveTodo(formData);
    }
    return (
        <form className="form" onSubmit={(e) => handleSaveTodo(e, formData)}>
            <div>
                <div>
                    <label htmlFor="name">Title</label>
                    <input type="text" id="title" onChange={handleForm}/>
                </div>
                <div>
                    <label htmlFor="dscription">Description</label>
                    <input type="text" id="description" onChange={handleForm}/>
                </div>
            </div>

            <button disabled={formData === undefined ? true : false}>Add Todo</button>
        </form>
    )
}

export default AddTodo;
