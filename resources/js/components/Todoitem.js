import React, { useState } from 'react';
import '../../css/app.css';

export default function Todoitem({ todo, handleEdit, handleDestroy, toggleComplete, checked }) {
    const textDisplayStyle = `text-display ${( todo.completed ) ? "crossed" : ""}`;
    const [ change, setChange ] = useState(false)
    const [ text, setText ] = useState(todo.text)

    if (!checked) {
        return (
            <div className="todoitem-container" >
                <input className="checkbox" type="checkbox" onChange={ () => toggleComplete(todo, !todo.completed) } checked={ todo.completed }/>
                { (change) 
                    ? <div>
                        <input className="text-input-items" type="text" value={ text } onChange={ e => setText(e.target.value)} /> 
                        <button className="buttonEdit" type="button" onClick={ () => {handleEdit(todo, text); setChange(false)} }>&#10003;</button>
                    </div>
                    : <div>
                        <div className={ textDisplayStyle }>{ todo.text }</div>
                        <button className="buttonEdit" type="button" onClick={ () => setChange(true) }>&#x270e;</button>
                        <button className="buttonDel"type="button" onClick={ () => handleDestroy(todo) }>X</button>
                    </div>
                }     
            </div>
        )
    }
} 