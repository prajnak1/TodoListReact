import React, {useState} from 'react'
//useState is used to keep track of what the user does
//want prop to be able to pass into other components
export const EditTodoForm = ({editTodo, task}) =>{
    //want it to be empty string initially
    const [value, setValue] = useState(task.task)
    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value, task.id);
        //empties the value after submitting
        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit = {handleSubmit}>
            <input type = "text" value = {value} onChange={(e)=>setValue(e.target.value)}className = "todo-input" placeholder = "Update Task" />
            <button type = "submit" className ="todo-btn" >Update Task</button>
        </form>
    )
}