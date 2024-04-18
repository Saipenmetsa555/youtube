import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, openMobileMenu } from "./utils/appSlice";

const Header = () => {
  const mobileOpen = useSelector((store) => store.app.mobileOpen);
  const dispatch = useDispatch();
  const handleHead = () => {
    dispatch(toggleMenu());
  };

  const headerHandle = () => {
    // console.log("open");
    // setMobileOpen(!mobileOpen);
    dispatch(openMobileMenu());
  };
  console.log(mobileOpen);
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-between shadow-md mb-5">
          <div className="flex">
            <button
              onClick={() => handleHead()}
              className="w-6 h-4 ml-5 mt-7 cursor-pointer"
            >
              <img
                className=""
                src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png"
                alt="hamberg"
              />
            </button>
            <img
              className="w-32"
              src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
              alt="youtube-logo"
            />
          </div>
          <div>
            <input
              className="w-96 p-1 rounded-l-full ml-5 mt-5 mb-5 pl-5 border border-gray-400 outline-none"
              placeholder="Search"
              type="seach"
            />
            <button className="rounded-r-full border border-gray-400 p-1 w-16 bg-gray-100">
              Search
            </button>
          </div>
          <div className="flex mr-6 mt-3">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/019/879/206/small/video-camera-symbol-video-camera-icon-symbol-illustration-on-transparent-background-free-png.png"
              alt="video"
              className="h-8 m-2"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNw-MI4_6rPqBTkMpZ_8mcoPUQavc7DuaerKtqr6MvSH-ry-q72_2Z4nfDRbKu7Ri4Wbg&usqp=CAU"
              alt="bell"
              className="h-8 m-2"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt="user"
              className="h-8 m-2"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="md:hidden shadow-md h-20">
          <img
            onClick={() => headerHandle()}
            src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png"
            alt="hamberger"
            className="h-8 m-5"
          />
        </div>
        {mobileOpen && (
          <div className="w-full h-2/4 text-center">
            <h1
              onClick={() => {
                // navigate("/");
              }}
              className="text-5xl"
            >
              Home
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
