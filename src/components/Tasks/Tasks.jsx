import React, { useState } from 'react'
import taskEntries from "../../taskEntries.json"
import teacherEntries from "../../teachers.json"
import "./Tasks.css"

export default function Tasks({ selectedCourse }) {
    const taskEntriesData = taskEntries;
    const todayDate = new Date();
    const tomorrowDate = new Date();
    tomorrowDate.setDate(todayDate.getDate() + 1);

    // const [selectedCourse, setSelectedCourse] = useState("All");


    return (
        <div>
            <h2 className="font-bold text-sm text-gray-700">Today</h2>
            {taskEntriesData.map(task => {
                const taskDate = new Date(task.date);

                if (taskDate.toDateString() === todayDate.toDateString() && (selectedCourse === "All" || task.course === selectedCourse)) {
                    const teacher = teacherEntries.find(teacher => teacher.teacher_id === task.teacher_id);
                    return (
                        <li className="list-none rounded-md bg-gray-200 mb-3 p-2" key={task.id}>
                            <p className="text-xs whitespace-nowrap overflow-hidden">{task.title}</p>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <p className="text-xs text-gray-600">{task.course}</p>
                                    <p className="text-xs text-gray-600">{teacher.name}</p>
                                </div>
                                <p className="text-xs text-gray-600">
                                    {new Date(task.date).getHours()}:{String(new Date(task.date).getMinutes()).padStart(2, '0')}
                                </p>
                            </div>
                        </li>
                    )
                }
            })}
            <h2 className="font-bold text-sm text-gray-700">Tomorrow</h2>
            {taskEntriesData.map(task => {
                const taskDate = new Date(task.date);
                console.log("Tasks date:", taskDate.toDateString())

                if (taskDate.toDateString() === tomorrowDate.toDateString() && (selectedCourse === "All" || task.course === selectedCourse)) {
                    const teacher = teacherEntries.find(teacher => teacher.teacher_id === task.teacher_id);
                    return (
                        <li className="list-none rounded-md bg-gray-200 mb-3 p-2" key={task.id}>
                            <p className="text-xs whitespace-nowrap overflow-hidden">{task.title}</p>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <p className="text-xs text-gray-600">{task.course}</p>
                                    <p className="text-xs text-gray-600">{teacher.name}</p>
                                </div>
                                <p className="text-xs text-gray-600">
                                    {new Date(task.date).getHours()}:{String(new Date(task.date).getMinutes()).padStart(2, '0')}
                                </p>
                            </div>
                        </li>
                    )
                }
            })}
            <h2 className="font-bold text-sm text-gray-700">Later</h2>
            {taskEntriesData.map(task => {
                const taskDate = new Date(task.date);
                console.log("Tasks date:", taskDate.toDateString())

                if (taskDate > tomorrowDate  && (selectedCourse === "All" || task.course === selectedCourse)) {
                    const teacher = teacherEntries.find(teacher => teacher.teacher_id === task.teacher_id);
                    return (
                        <li className="list-none rounded-md bg-gray-200 mb-3 p-2" key={task.id}>
                            <p className="text-xs whitespace-nowrap overflow-hidden">{task.title}</p>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <p className="text-xs text-gray-600">{task.course}</p>
                                    <p className="text-xs text-gray-600">{teacher.name}</p>
                                </div>
                                <p className="text-xs text-gray-600">
                                    {new Date(task.date).toLocaleString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: false
                                    })}
                                </p>
                            </div>
                        </li>
                    )
                }
            })}
        </div>
    )
}
