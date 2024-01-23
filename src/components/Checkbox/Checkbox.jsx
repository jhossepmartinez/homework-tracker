import { useState } from "react";
import {  MdCheckBox } from "react-icons/md";
import {  MdCheckBoxOutlineBlank } from "react-icons/md";

export default function Checkbox({onClick, defaultState}) {
    const [checked, setChecked] = useState(defaultState);

    const handleCheck = () => {
        setChecked(!checked);
        onClick();
    }

    return (
        <div>
            <button 
                className={`transition-transform ${checked ? 'scale-110' : ''}`}
                onClick={handleCheck}>
                {checked ? <MdCheckBox size={22} color="#0284c7" /> : <MdCheckBoxOutlineBlank size={22} color=""/>}
            </button>
        </div>
    )
}

