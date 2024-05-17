import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
           
            <h3 className="font-bold text-2xl text-black">Login</h3>
            <div className="text-black mt-6">
              <span>Email:</span>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="outline-none mt-1 border rounded-md  px-3 py-1"
                  {...register("email", { required: true })}
                /> <br/>
                  {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="text-black mt-10">
              <span>Password:</span>
              <div>
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="outline-none border rounded-md mt-1 px-3 py-1"
                  {...register("password", { required: true })}
                />
                <br/>
                  {errors.password && <span className="text-sm text-red-600">This field is required</span>}
              </div>
            </div>
            <div className="text-black mt-4 flex justify-around">
                <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200">Login</button>
                <div className="flex justify-around mt-2">Not registered? <span className="underline text-blue-600 cursor-pointer">
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
