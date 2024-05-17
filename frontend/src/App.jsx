
import Contacts from "./Contact/Contacts"
import Course from "./Courses/Course"
import About from "./components/About"
import Signup from "./components/Signup"
import Home from "./home/Home"
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Course/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
