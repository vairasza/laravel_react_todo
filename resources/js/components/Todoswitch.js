import React, { useState } from 'react';
import '../../css/app.css';

export default function Todoswitch({ checked, setChecked }) {
    return (
        <div className="switch-container">
            <input
                className="checkbox-switch"
                type="checkbox"
                name="switcher"
                value = { checked}
                onChange= { () => { setChecked(!checked) } }
            />
            { (checked)
                ? <span>showing only open items in your list</span>
                : <span>showing all items in your list</span>
            }
        </div>
    )
}