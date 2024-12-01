import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
//initialize uuidv4
uuidv4();
//Need the wrapper so the function can be used elsewhere

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        setTodos([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false},]);
        console.log(todos)
    }
    //id is a parameter
    //check if it's equal to the id
    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}:todo))
    }
    //removing the todo with the id we passed in 
    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id===id ? {...todo, isEditing: !todo.isEditing}: todo))
    }
    const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };
    
    return (
        <div className = "TodoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo ={addTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo}/>
                ) : (
                    <Todo task = {todo} key = {todo.id} toggleComplete={toggleComplete}deleteTodo={deleteTodo} editTodo={editTodo} />
                )
                
                
            ))}
        </div>
    )
}