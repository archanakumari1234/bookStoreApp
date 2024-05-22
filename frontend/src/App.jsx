
import Contacts from "./Contact/Contacts"
import Course from "./Courses/Course"
import About from "./components/About"
import Signup from "./components/Signup"
import Home from "./home/Home"
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider"
function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={authUser?<Course/>:<Navigate to='/signup'/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App
