import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    }
   await axios.post('http://localhost:4001/user/login', userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Login Successfully');
          window.location.reload()
  
        document.getElementById("my_modal_3").close();
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
    }).catch((error)=>{
      if(error.response){
        console.log(error);
      toast.error('Error',error.response.data.message);
      }
    })
  }
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
           
            <h3 className="font-bold text-2xl dark:text-white text-black">Login</h3>
            <div className="text-black dark:text-white mt-6">
              <span>Email:</span>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="outline-none mt-1 border rounded-md  px-3 py-1 text-black"
                  {...register("email", { required: true })}
                /> <br/>
                  {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="text-black dark:text-white mt-10">
              <span>Password:</span>
              <div>
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="outline-none border rounded-md mt-1 px-3 py-1 text-black"
                  {...register("password", { required: true })}
                />
                <br/>
                  {errors.password && <span className="text-sm text-red-600">This field is required</span>}
              </div>
            </div>
            <div className="text-black dark:text-white mt-4 flex justify-around">
                <button className="bg-pink-600 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200">Login</button>
                <div className="flex justify-around mt-2">Not registered? <span className="underline text-blue-600 dark:text-pink-700 cursor-pointer">
                  <Link to={'/signup'}>Signup</Link>
                  </span></div>
            </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
