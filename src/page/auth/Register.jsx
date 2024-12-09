import { Input } from "@/components/ui/input";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUserRegisterMutation } from "@/app/feature/auth/authApi";
import { useRef, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useImageUploadeMutation } from "@/app/feature/imageUploade/imageApi";
import Loading from "@/components/popularCategory/Loading";
import { Helmet } from "react-helmet";

const Register = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const fileref = useRef();

  const [userRegister] = useUserRegisterMutation();
  const [image, setImage] = useState();

  const [imageUploade, { isLoading }] = useImageUploadeMutation();

  const onSubmit = async (data) => {
    const register = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      image: image?.data
    };
    try {
      const res = await userRegister(register).unwrap();
      if (res.msg) {
        reset();
        navigate("/login");
      }
    } catch (error) {
      setError(error);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await imageUploade(formData).unwrap();
      setImage(res);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <div className=" flex items-center justify-center h-fit">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register page </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <div className="mt-10 shadow-xl bg-white p-4 rounded ">
          <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <h1 className=" font-bold text-lg">Create A Account !</h1>
            {/* firstname */}
            <div className="">
              {/* Profile Image */}
              <div className="flex flex-col items-center mb-4">
                <div className=" flex">
                  {isLoading ? <Loading /> :  <img
                    className=" border border-black bg-slate-100 h-24 w-24 hover:bg-indigo-50 transition duration-300  rounded-full"
                    src={image?.data || "https://www.shutterstock.com/image-vector/upload-icon-vector-web-computer-260nw-1924011959.jpg"}
                    onClick={() => fileref.current.click()}
                    alt=""
                  /> }
                 
                </div>
              </div>
              <input
                name="profileImage"
                type="file"
                accept="image/*"
                ref={fileref}
                hidden
                onChange={handleImageChange}
                className="text-sm text-gray-500"
              />
              {errors.firstname && (
                <span className="text-rose-700 italic">
                  This field is required
                </span>
              )}
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
              {errors.firstname && (
                <span className="text-rose-700 italic">
                  This field is required
                </span>
              )}
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
              {errors.lastname && (
                <span className="text-rose-700 italic">
                  This field is required
                </span>
              )}
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
              {errors.email && (
                <span className="text-rose-700 italic">
                  This field is required
                </span>
              )}
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
              {errors.password && (
                <span className="text-rose-700 italic">
                  This field is required
                </span>
              )}
            </div>
            <p className="text-red italic">{error.msg}</p>
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
              <a href="/login" className="text-blue-600  cursor-pointer">
                Login{" "}
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
    </>
  );
};

export default Register;
