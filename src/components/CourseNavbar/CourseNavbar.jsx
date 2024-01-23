import React from 'react'
import "./CourseNavbar.css"
import courseEntries from "../../courses.json"

export default function CourseNavbar({ selectedCourse, onSelectCourse }) {
    return (
        <div className="container-snap flex space-x-2 text-sm overflow-x-auto">
            {courseEntries.map(course => (
                <button
                    key={course.id}
                    className="bg-slate-300 rounded-l-full rounded-r-full px-5 pt-1 pb-1 h-10 whitespace-nowrap"
                    onClick={() => onSelectCourse(course.name)}
                >
                    {course.name}
                </button>
            ))}
        </div>
    )
}
