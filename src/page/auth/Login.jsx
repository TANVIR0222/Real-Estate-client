import { useUserLoginMutation } from "@/app/feature/auth/authApi";
import { setUser } from "@/app/feature/auth/authSlice";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [userLogin, { isLoading }] = useUserLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    try {
      const res = await userLogin({ email, password }).unwrap();
      const {token,user} = res;

      if (res) {
        dispatch(setUser({user}));
        localStorage.setItem("token", token);
        navigate("/");
        reset();
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <div className=" flex items-center justify-center   h-fit">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login page </title>
      </Helmet>
        <div className="mt-20 shadow-2xl bg-white p-4 rounded ">
          <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <h1 className=" font-bold text-lg">Login</h1>
            {/* email */}
            <div className="">
              <label className="label">
                <span className="">Email</span>
              </label>
              <Input
                type="email"
                placeholder="Email Address"
                className=" w-80 md:w-96 bg-gray-200 "
                defaultValue={'admin@gmail.com'}
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
                defaultValue={'admin'}
                className=" w-80 md:w-96 bg-gray-200 "
                id="password"
                {...register("password", { required: true })}
              />
              <p>{error.msg}</p>
              {/* <input type="text"  /> */}
            </div>
            {/* login btn */}
            <div className=" mt-6">
              <button className="  w-full p-2 rounded text-black  bg-green" type="submit">
                {isLoading ? <p className=" text-black">Loading...</p>  : <p className=" text-black">Login</p>}
              </button>
            </div>
            <p className="text-center my-4">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-600  cursor-pointer">
                Register{" "}
              </a>{" "}
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
    </div>
  );
};

export default Login;
