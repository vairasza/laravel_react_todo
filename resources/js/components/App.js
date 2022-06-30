import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Todoinput from './Todoinput';
import Todoswitch from './Todoswitch';
import { createTodo, deleteTodo, getAllTodos, updateTodo } from '../requests/request'
import Todoitem from './Todoitem';


export default function App() {
    const [ todos, setTodos ] = useState([])
    const [ text, setText ] = useState("")
    const [ checked, setChecked ] = useState(false)

    const handleNewItem = async (e) => {
        e.preventDefault()
        if (text !== null || text !== "") {
            await createTodo(text)
            setText("")
        }
    }

    const handleEdit = async (todo, text) => {
        todo.text = text
        await updateTodo(todo)
    }

    const handleDestroy = async (todo) => {
        await deleteTodo(todo)
    }

    const toggleComplete = async (todo, completed) => {
        todo.completed = completed
        await updateTodo(todo)
    }

    useEffect(async () => {
        const result = await getAllTodos();
        setTodos(result)
    }, [ todos ])

    return (
        <div>
            <div className="titlebar-container">
                My Todolist
            </div>
            <div>
                <Todoinput text={ text } setText={ setText } handleNewItem={ handleNewItem }/>
            </div>
            {todos.map(todo => 
                <Todoitem
                    key={todo.id}
                    todo={todo}
                    handleEdit={handleEdit} 
                    handleDestroy={handleDestroy} 
                    toggleComplete={toggleComplete}
                    checked={checked}
                />
            )}
            <div>
                <Todoswitch checked={ checked } setChecked={ setChecked }/>
            </div>
             
        </div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
