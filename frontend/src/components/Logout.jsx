import toast from "react-hot-toast"
import { useAuth } from "../Context/AuthProvider"

const Logout = () => {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () =>{
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success('Logout successful!')
                window.location.reload()
        } catch (error) {
            toast.error("Error: ", error)
        }
    }
  return (
    <>
      <div>
              <button className="btn bg-black text-white hover:bg-slate-800" onClick={handleLogout}>
                Logout
              </button>
            </div>
    </>
  )
}

export default Logout
