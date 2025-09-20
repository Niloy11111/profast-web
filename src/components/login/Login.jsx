import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import loading from "/src/animations/login.json";
import logo from "/src/assets/logo.png";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");

    const accepted = e.target.terms.checked;
  };
  return (
    <section className=" font-Inter bg-white">
      {/* w-[1440px] mx-auto */}
      <div className="   flex  justify-center gap-[211px]">
        <div className="flex-1  pt-14 pl-14">
          <div className="flex  gap-3 items-center  ">
            <div className="flex items-end ">
              <div className="">
                <img src={logo} alt="" />
              </div>

              <div className=" ">
                <h3
                  className="text-[24px] ml-[-16px] leading-[24px]   font-extrabold text-blackOne
                 "
                >
                  Profast
                </h3>
              </div>
            </div>

            <div className="">
              <Link to="/" className="flex items-center gap-2">
                <button className="hover:cursor-pointer py-[11px] px-[19px] hover:font-bold bg-p1 text-[#5B6A2E] rounded-full cursor-pointer  navIcon mt-3 ">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[400px] mr-16  mx-auto mt-[65px]">
            <form onSubmit={handleLogin} className=" rounded  ">
              <h2 className=" text-[#000]     text-[42px]  font-extrabold ">
                Welcome Back
              </h2>

              <p className="text-[#000] mb-5">Login with Profast</p>

              <div>
                <h3 className="formLevel font-medium text-[#0F172A]">Email</h3>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="riderFormInput mb-3  w-full"
                />
              </div>

              <div>
                <h3 className="formLevel font-medium text-[#0F172A]">
                  Passowrd
                </h3>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="riderFormInput mb-3  w-full"
                />
              </div>

              <div className="mb-3  ">
                <a className="text-[#71717A]  underline ">Forget Password?</a>
              </div>

              <button className="cursor-pointer rounded-[6px] py-2 mx-auto w-full  bg-p1 mb-3    font-medium">
                Login
              </button>

              <p className=" font-medium mb-3  text-[#71717A]   ">
                Don’t have any account?
                <Link to="/register">
                  <a className=" cursor-pointer text-p1"> Register </a>{" "}
                </Link>
              </p>
              <p className=" font-medium   text-[#71717A] text-center mt-2 mb-3  ">
                Or
              </p>
            </form>
            <div className="rounded-[6px] cursor-pointer w-full   justify-center flex items-center gap-2 mt-2  px-8 py-2 text-base border bg-[#E9ECF1]">
              <div className="flex items-center gap-2 text-[#000] font-medium">
                <FcGoogle className="text-2xl"></FcGoogle>
                Login with google
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-[500px] bg-[#FAFDF0] h-screen  transition-all duration-500  flex justify-center items-center">
          <div className=" ">
            <Lottie
              className="h-[600px]  w-[600px] "
              animationData={loading}
              loop={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
