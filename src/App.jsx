import { useState } from 'react'
import './App.css'
import CourseNavbar from './components/CourseNavbar/CourseNavbar'
import Tasks from './components/Tasks/Tasks'

function App() {
    const [selectedCourse, setSelectedCourse] = useState("All");

    const handleSelectCourse = (course) => {
        setSelectedCourse(course);
    }
    return (
        <div className="mt-2 mx-4 font-inter">
            <CourseNavbar selectedCourse={selectedCourse} onSelectCourse={handleSelectCourse} />
            <div className="mt-2">
                <Tasks selectedCourse={selectedCourse}/>
            </div>
        </div>
    )
}

export default App
