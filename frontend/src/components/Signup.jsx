import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <div
          id="my_modal_1"
          className="flex h-screen items-center justify-center"
        >
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <div>
                <h3 className="font-bold text-2xl text-black">Sign-Up</h3>
              </div>
              <div className="text-black mt-6">
                <span>Name:</span>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your fullname"
                    className="outline-none mt-1 border rounded-md  px-3 py-1"
                    {...register("name", { required: true })}
                  />
                  <br />
                  {errors.name && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="text-black mt-6">
                <span>Email:</span>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="outline-none mt-1 border rounded-md  px-3 py-1"
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
              <div className="text-black mt-10">
                <span>Password:</span>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your password"
                    className="outline-none border rounded-md mt-1 px-3 py-1"
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
              <div className="text-black mt-4 flex justify-around">
                <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <div>
                  <div className="flex justify-around mt-2">
                    Have account?{" "}
                    <span className="underline text-blue-600 cursor-pointer">
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
