import { useEffect, useState } from "react";
import { socket } from "../..";
import useAuthentication from "../../customHooks/useAuthentication";
import Header from "../Header/Header";

function Profile() {
  const { user } = useAuthentication();
  const [likeCount, checkLikeCount] = useState(() => user.like_count);
  useEffect(() => {
    socket.on('response-handle-like', data => {
      console.log({ data });
      checkLikeCount(pre => pre + 1);
    })
  }, [])

  useEffect(() => {
    socket.on('response-handle-unlike', data => {
      console.log({ data });
      checkLikeCount(pre => pre - 1);
    })
  }, [])
  
  return (
    <>
      <Header />
      <section className="pt-[200px] h-[100px]  w-[100%]  max-w-[975px] mx-auto my-0 p-0 ">
        <div className="flex flex-wrap justify-center -px-1 lg:-mx-3.5">
          <h2 className="font-semibold text-lg">My Profile</h2>
          <div className="min-h-[100px] w-11/12 md:w-6/12 px-1 md:px-3.5 mb-7 ">
            <div className="flex h-full bg-[#e4e4e4] border border-solid  items-center shadow-xl rounded justify-around">
              <div className="flex-col justify-center items-center">
                {/* images */}
                <div
                  className=" rounded-full w-[60px] h-[60px] bg-no-repeat bg-cover bg-center"
                  style={{
                    backgroundImage:
                      `url(${user.avatar})`,
                  }}
                ></div>
                <p className="font-medium text-center"> {user.username} </p>
              </div>
              <div className="flex-col justify-center items-center">
                <div className="flex justify-center">
                  <svg
                    aria-label="Bỏ thích"
                    className="animate-likePostShowHeart"
                    color="#ed4956"
                    fill="#ed4956"
                    height={36}
                    role="img"
                    viewBox="0 0 48 48"
                    width={36}
                  >
                    <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                </div>
                <div>
                  <span>
                    Number Heart: <span className="font-medium">{likeCount}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
