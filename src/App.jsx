import { useState } from 'react'
import './App.css'
import CourseNavbar from './components/CourseNavbar/CourseNavbar'
import Tasks from './components/Tasks/Tasks'
import CreateTaskButton from "./components/CreateTaskButton/CreateTaskButton"

function App() {
    const [selectedCourse, setSelectedCourse] = useState("All");

    const handleSelectCourse = (course) => {
        setSelectedCourse(course);
    }

    return (
        <div className="flex justify-center">
            <div className="flex-col justify-center mt-2 mx-4 font-inter sm:w-[450px] sm:h-[667px] overflow-auto">
                <div>
                    <CourseNavbar selectedCourse={selectedCourse} onSelectCourse={handleSelectCourse} />
                </div>
                <div className="mt-2">
                    <Tasks selectedCourse={selectedCourse}/>
                </div>
                <div className="relative">
                    <div className="absolute">
                        <div className="fixed bottom-10 right-4">
                            <CreateTaskButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
