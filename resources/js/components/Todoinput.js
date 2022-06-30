import React, { useState } from 'react';
import '../../css/app.css';

export default function Todoinput({ text, setText, handleNewItem }) {
    return (
        <div className="todoinput-container">
            <form className="todoinput-form" onSubmit={ handleNewItem }>
                <input 
                    className="text-input" type="text" 
                    value={ text } 
                    onChange={ e => setText(e.target.value) } 
                    placeholder="Type in a new item..."
                />
                <button className="button-input" type="submit">+</button>
            </form>
        </div>
    )
}