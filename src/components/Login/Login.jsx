import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../../redux/features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(
      userLogin({
        username,
        password,
      })
    );
  }
  
  return (
    <div className="h-screen  w-screen bg-[rgb(225, 225, 225)]">
      <div className="h-full w-full">
        <section className="register">
          <div className="max-w-[935px] w-[100%] mx-auto my-0 p-0 ">
            <div className="flex justify-center pt-8">
              {/* form */}
              <div className="max-w-[350px] w-[350px] mt-8">
                <div className="flex flex-col bg-white border-none md:border md:border-solid border-[#ccc] items-center pb-5">
                  <img
                    alt="Instagram"
                    className=" w-[175px] mt-8"
                    src="https://www.macmillandictionary.com/external/slideshow/full/emoji_heart_exclamation_full.jpg"
                  />
                  <div className="text-lg font-semibold text-center text-[#8e8e8e]">
                    Login in to see what is going on?
                  </div>
                  <form action className="flex flex-col w-[268px] mt-6">
                    <div className=" h-[38px] mb-[6px]">
                      <input
                        type="text"
                        className="h-full w-full outline-none border border-solid border-[#ccc] text-xs p-2"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className=" h-[38px] mb-[6px]">
                      <input
                        type="password"
                        className="h-full w-full outline-none border border-solid border-[#ccc] text-xs p-2"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      onClick={loginUser}
                      type="submit"
                      className="my-2 rounded-sm bg-[#0095f6] text-white font-semibold py-[3px] px-[9px]"
                    >
                      Login
                    </button>
                    <div className="flex mt-2 mb-3">
                      <div className="h-[1px] top-2 bg-[#dbdbdb] relative flex-1" />
                      <div className="mx-[18px] text-xs font-semibold opacity-40 uppercase">
                        Or
                      </div>
                      <div className="h-[1px] top-2 bg-[#dbdbdb] relative flex-1" />
                    </div>
                    <div className="text-center text-xs opacity-80 mt-3">
                      <span className="text-[#385185]">Forgot password?</span>
                    </div>
                  </form>
                </div>
                <div className="bg-white text-sm border border-solid border-[#ccc] py-4 text-center mt-3">
                  <span>You don't have any accounts?</span>
                  <Link to={"/register"}>
                    <p className="text-[#0095f6] font-semibold">
                      Register
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
