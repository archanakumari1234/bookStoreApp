import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from 'axios'
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Signup = () => {
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const Navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
   await axios.post('http://localhost:4001/user/signup', userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Signup Successfully');
        Navigate(from, {replace: true})
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
    }).catch((error)=>{
      if(error.response){
        console.log(error);
      toast.error(error.response.data.message)
      }
    })
  }
  return (
    <>
      <div>
        <div
          id="my_modal_1"
          className="flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white"
        >
          <div className="modal-box dark:bg-slate-800 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="dark:bg-slate-800 dark:text-white">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <div>
                <h3 className="font-bold text-2xl dark:text-white text-black">Sign-Up</h3>
              </div>
              <div className="text-black dark:text-white mt-6">
                <span>Name:</span>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your fullname"
                    className="outline-none mt-1 border rounded-md  px-3 py-1 text-black"
                    {...register("fullname", { required: true })}
                  />
                  <br />
                  {errors.fullname && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="text-black dark:text-white mt-6">
                <span>Email:</span>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="outline-none mt-1 border rounded-md  px-3 py-1 text-black"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
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
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="text-black dark:text-white mt-4 flex justify-around">
                <button className="bg-pink-600 text-white px-3 py-1 rounded-md hover:bg-pink-800 duration-200">
                  Signup
                </button>
                <div>
                  <div className="flex justify-around mt-2">
                    Have account?{" "}
                    <span className="underline text-blue-600 dark:text-pink-600 cursor-pointer">
                      <a
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Login
                      </a>{" "}
                      <Login />
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
