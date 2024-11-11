import { Input } from "@/components/ui/input";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUserRegisterMutation } from "@/app/feature/auth/authApi";

const Register = () => {
 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [userRegister] = useUserRegisterMutation();

  const onSubmit = async (data) => {
    // const image = data.image[0];

    // console.log(filedata);
    // console.log(data)
    const register = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    };

    console.log(register);

    try {
      await userRegister(register).unwrap();
      // console.log(res);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center h-fit">
        <div className="mt-10  bg-white p-4 rounded ">
          <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <h1 className=" font-bold text-lg">Create A Account !</h1>
            {/* firstname */}
            <div className="">
              <label className="label">
                <span className="">First Name</span>
              </label>
              <Input
                type="text"
                id="firstname"
                placeholder="First Name"
                className=" w-80 md:w-96 bg-gray-200 "
                {...register("firstname", { required: true })}
              />
            </div>{" "}
            {/* last name */}
            <div className="">
              <label className="label">
                <span className="">Last Name</span>
              </label>
              <Input
                type="texr"
                id="lastname"
                placeholder="Last Name"
                className=" w-80 md:w-96 bg-gray-200 "
                {...register("lastname", { required: true })}
              />
            </div>
            {/* email */}
            <div className="">
              <label className="label">
                <span className="">Email</span>
              </label>
              <Input
                type="email"
                placeholder="Email Address"
                className=" w-80 md:w-96 bg-gray-200 "
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            {/* pass */}
            <div className="">
              <label className="label">
                <span className="">Password</span>
              </label>
              <Input
                type="password"
                placeholder="Password"
                className=" w-80 md:w-96 bg-gray-200 "
                id="password"
                {...register("password", { required: true })}
              />
              {/* <p>{file.name}</p> */}
            </div>
            {/* login btn */}
            <div className=" mt-6">
              <Input
                type="submit"
                value={"Sing Up"}
                className="btn text-black bg-green"
              />
            </div>
            <p className="text-center my-4">
              Have an account?{" "}
              <a href="/login" className="text-blue-600  cursor-pointer">Login </a>{" "}
            </p>
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost text-red font-semibold absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>
          {/* socil */}
          {/* <hr /> */}
          <div className="flex justify-center my-3 items-center gap-8">
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaGoogle className="text-xl" />
              {/* <FaFacebook/>
                <FaGithub/> */}
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaFacebook className="text-xl" />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaGithub className="text-xl" />
            </button>
          </div>
        </div>
        {/* <Model /> */}
      </div>
    </>
  );
};

export default Register;
