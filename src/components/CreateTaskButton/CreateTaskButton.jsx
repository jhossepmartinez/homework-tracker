import React from 'react'
import { IoMdAdd } from "react-icons/io";

export default function CreateTaskButton() {
    return (
        <div className="w-[45px] h-[45px] rounded-full bg-sky-500 flex items-center justify-center shadow-md shadow-sky-300">
            <button ><IoMdAdd color="White" /></button>
        </div>
    )
}
