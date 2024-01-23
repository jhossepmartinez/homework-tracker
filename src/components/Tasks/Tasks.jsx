import React, { useState, useEffect } from 'react'
import taskEntries from "../../taskEntries.json"
import teacherEntries from "../../teachers.json"
import courseEntries from "../../courses.json"
import colors from "../../colors.json"
import "./Tasks.css"

import Checkbox from '../Checkbox/Checkbox';

export default function Tasks({ selectedCourse }) {
    // const [taskEntriesData, setTaskEntriesData] = useState(taskEntries);
    const [taskEntriesData, setTaskEntriesData] = useState(() => {
        const storedData = localStorage.getItem("myData");
        return storedData ? JSON.parse(storedData) : taskEntries;
    })

    useEffect(() => {
        localStorage.setItem("myData", JSON.stringify(taskEntriesData));
    }, [taskEntriesData]);

    const todayDate = new Date();
    const tomorrowDate = new Date();
    tomorrowDate.setDate(todayDate.getDate() + 1);

    // useEffect(() => {
    //     setTaskEntriesData(taskEntries);
    // }, [selectedCourse])

    const handleCheckboxClick = (taskId) => {
        const updateTasks = taskEntriesData.map(task => {
            if (task.id === taskId) {
                return { ...task, done: !task.done };
            }
            console.log("SI")
            return task;
        });
        setTaskEntriesData(updateTasks);
    }

    return (
        <div>
            <h2 className="font-bold text-md text-gray-700 pb-2">Today</h2>
            {taskEntriesData.map(task => {
                const taskDate = new Date(task.date);
                const course = courseEntries.find(course => course.id === task.course);

                if (taskDate.toDateString() === todayDate.toDateString() && (selectedCourse === "All" || course.name === selectedCourse)) {
                    const teacher = teacherEntries.find(teacher => teacher.teacher_id === task.teacher_id);
                    const courseColors = colors.find(color => color.id === course.color_id);

                    return (
                        <li className="flex list-none rounded-md border border-slate-200 mb-3 p-2 justify-between" key={task.id}>
                            <div className="w-auto flex-col flex-grow">
                                <div className="flex justify-between">
                                    <p className="text-sm font-medium whitespace-nowrap overflow-hidden">{task.title}</p>

                                    <div className="justify-center pl-3 flex">
                                        <Checkbox onClick={() => handleCheckboxClick(task.id)} defaultState={task.done} />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex gap-4">
                                        <p className="text-sm px-2 rounded-md" style={{backgroundColor: courseColors.bg, color: courseColors.font}}>{course.name}</p>
                                        <p className="text-sm text-gray-600 flex items-center gap-1">
                                            {teacher.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pl-1 pt-2">
                                    <p className="text-sm text-gray-600">
                                        {new Date(task.date).getHours()}:{String(new Date(task.date).getMinutes()).padStart(2, '0')}
                                    </p>
                                    <div className="tags flex">
                                        {task.tags.map((tag, index) => (
                                            <p key={index} className="text-sm pl-1">
                                                #{tag} 
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }
            })}
            <h2 className="font-bold text-md text-gray-700 pb-2">Tomorrow</h2>
            {taskEntriesData.map(task => {
                const taskDate = new Date(task.date);
                const course = courseEntries.find(course => course.id === task.course);

                if (taskDate.toDateString() === tomorrowDate.toDateString() && (selectedCourse === "All" || course.name === selectedCourse)) {
                    const teacher = teacherEntries.find(teacher => teacher.teacher_id === task.teacher_id);
                    const courseColors = colors.find(color => color.id === course.color_id);

                    return (
                        <li className="flex list-none rounded-md border border-slate-200 mb-3 p-2 justify-between" key={task.id}>
                            <div className="w-auto flex-col flex-grow">
                                <div className="flex justify-between">
                                    <p className="text-sm font-medium whitespace-nowrap overflow-hidden">{task.title}</p>

                                    <div className="justify-center pl-3 flex">
                                        <Checkbox onClick={() => handleCheckboxClick(task.id)} defaultState={task.done} />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex gap-4">
                                        <p className="text-sm px-2 rounded-md" style={{backgroundColor: courseColors.bg, color: courseColors.font}}>{course.name}</p>
                                        <p className="text-sm text-gray-600 flex items-center gap-1">
                                            {teacher.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pl-1 pt-2">
                                    <p className="text-sm text-gray-600">
                                        {new Date(task.date).getHours()}:{String(new Date(task.date).getMinutes()).padStart(2, '0')}
                                    </p>
                                    <div className="tags flex">
                                        {task.tags.map((tag, index) => (
                                            <p key={index} className="text-sm pl-1">
                                                #{tag} 
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }
            })}
            <h2 className="font-bold text-md text-gray-700 pb-2">Later</h2>
            {taskEntriesData.map(task => {
                const taskDate = new Date(task.date);
                const course = courseEntries.find(course => course.id === task.course);

                if (taskDate > tomorrowDate  && (selectedCourse === "All" || course.name === selectedCourse)) {
                    const teacher = teacherEntries.find(teacher => teacher.teacher_id === task.teacher_id);
                    const courseColors = colors.find(color => color.id === course.color_id);

                    return (
                        <li className="flex list-none rounded-md border border-slate-200 mb-3 p-2 justify-between" key={task.id}>
                            <div className="w-auto flex-col flex-grow">
                                <div className="flex justify-between">
                                    <p className="text-sm font-medium whitespace-nowrap overflow-hidden">{task.title}</p>

                                    <div className="justify-center pl-3 flex">
                                        <Checkbox onClick={() => handleCheckboxClick(task.id)} defaultState={task.done} />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex gap-4">
                                        <p className="text-sm px-2 rounded-md" style={{backgroundColor: courseColors.bg, color: courseColors.font}}>{course.name}</p>
                                        <p className="text-sm text-gray-600 flex items-center gap-1">
                                            {teacher.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <p className="text-sm text-gray-600">
                                        {new Date(task.date).toLocaleString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hour12: false })}
                                    </p>
                                    <div className="tags flex">
                                        {task.tags.map((tag, index) => (
                                            <p key={index} className="text-sm pl-1">
                                                #{tag} 
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }
            })}
        </div>
    )
}
