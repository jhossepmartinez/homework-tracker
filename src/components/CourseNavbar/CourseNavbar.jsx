import React from 'react'

export default function CourseNavbar({ selectedCourse, onSelectCourse }) {
    return (
        <div className="flex space-x-2 text-xs">
            <button
                className="bg-gray-300 rounded-l-full rounded-r-full px-5 pt-1 pb-1"
                onClick={() => onSelectCourse("All")}
            >
                All
            </button>
            <button
                className="bg-gray-300 rounded-l-full rounded-r-full px-5 pt-1 pb-1"
                onClick={() => onSelectCourse("Physics")}
            >
                Physics
            </button>
            <button
                className="bg-gray-300 rounded-l-full rounded-r-full px-5 pt-1 pb-1"
                onClick={() => onSelectCourse("Math")}
            >
                Math
            </button>
        </div>
    )
}
