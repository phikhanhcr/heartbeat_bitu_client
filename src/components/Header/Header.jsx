import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useAuthentication from "../../customHooks/useAuthentication";
import { LOGOUT } from "../../redux/features/userSlice";

function Header() {
  const { user } = useAuthentication();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(LOGOUT());
  };
  return (
    <section className="h-header_height w-full bg-white border-b border-solid border-[#ccc] fixed top-0 left-0 right-0 z-[1] f;ex justify-between items-center">
      <div className="w-full h-full block p-0 max-w-[975px] my-0 mx-auto wide">
        <div className=" h-full flex justify-center md:justify-around items-center">
          <div className="block">
            <Link to={`/`}>
              <img
                alt="Instagram"
                className=" w-[120px]"
                src="https://www.macmillandictionary.com/external/slideshow/full/emoji_heart_exclamation_full.jpg"
              />
            </Link>
          </div>
          <div className="flex items-center">
            {/* username */}
            <Link to={`/profile`}>
              <div className="flex items-center">
                <div className="mr-2">
                  {" "}
                  <span className="font-medium">{user.username}</span>{" "}
                </div>
                {/* avatar */}
                <div
                  className="mr-2 rounded-full w-[60px] h-[60px] bg-no-repeat bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${user.avatar})`,
                  }}
                ></div>
              </div>
            </Link>
            {/* Logout button */}
            <div className="mr-2">
              <button
                onClick={handleLogout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
