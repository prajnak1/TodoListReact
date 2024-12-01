import React, {useState} from 'react'
//useState is used to keep track of what the user does
//want prop to be able to pass into other components
export const TodoForm = ({addTodo}) =>{
    //want it to be empty string initially
    const [value, setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value);
        //empties the value after submitting
        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit = {handleSubmit}>
            <input type = "text" className = "todo-input" value = {value}placeholder = "What is the task today?" onChange={(e)=>setValue(e.target.value)}/>
            <button type = "submit" className ="todo-btn" >Add Task</button>
        </form>
    )
}