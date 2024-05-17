import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="w-full md:w-1/2 m-auto py-5 px-4 mt-28 border shadow-2xl rounded-2xl justify-center align-middle">
        <h1 className="text-center dark:text-white text-black py-5 text-2xl uppercase font-bold">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 max-w-sm mx-auto bg-gradient-to-r p-5">
          <input
            type="text"
            placeholder="name"
            className="w-full outline-none rounded-lg py-1 px-2 bg-transparent border-1 border"
            {...register("name", { required: true })}
          />
          {errors.name && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
          <input
            type="email"
            placeholder="email"
            className="w-full outline-none py-1 px-2 rounded-lg border-1 border bg-transparent"
            {...register("email", { required: true })}
          />
          {errors.email && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
          <textarea
            className="text-gr
            ay-400 outline-none bg-transparent border-1 border px-4 py-3 rounded-md"
            rows="5"
            cols="50"
            placeholder="write here....."
            {...register("msg")}
          >
            
          </textarea>
          <button
            type="submit"
            className="border border-1 py-1 px-2 border-gray-200  w-1/3 mx-auto text-black bg-slate-400 rounded-lg hover:bg-red-300 "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
