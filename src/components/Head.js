import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, openMobileMenu } from "./utils/appSlice";
import { Youtube_Suggestion_API } from "./utils/constant";
import { useState, useEffect, useContext } from "react";
import FilterContext from "./utils/UserContext";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const mobileOpen = useSelector((store) => store.app.mobileOpen);
  const dispatch = useDispatch();

  const { setFilteredData } = useContext(FilterContext);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleSearch = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=AIzaSyBxLms13d6g1aaObeDezA_GMtzaOrdDv2M`
    );
    const dataSearch = await response.json();
    setFilteredData(dataSearch.items);
  };

  const getSearchSuggestion = async () => {
    // console.log(searchQuery, "-API Call");
    const response = await fetch(Youtube_Suggestion_API + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);
  };

  const handleHead = () => {
    dispatch(toggleMenu());
  };

  const handlePut = (each) => {
    setSearchQuery(each);
  };

  const headerHandle = () => {
    // console.log("open");
    // setMobileOpen(!mobileOpen);
    dispatch(openMobileMenu());
  };
  // console.log(mobileOpen);
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
            <div>
              <input
                className="w-96 p-1 rounded-l-full ml-5 mt-5 mb-5 pl-5 border border-gray-400 outline-none"
                placeholder="Search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                // onBlur={() => setShowSuggestions(false)}
              />
              <button
                onClick={() => handleSearch()}
                className="rounded-r-full border border-gray-400 p-1 w-16 bg-gray-100"
              >
                Search
              </button>
            </div>
            {showSuggestions && (
              <div className="ml-3 w-96 rounded-md py-2 px-10 fixed bg-white">
                <ul>
                  {suggestions.map((each) => (
                    <li
                      onClick={() => {
                        handlePut(each);
                        setShowSuggestions(false);
                      }}
                      key={each}
                      className="py-2 shadow-sm hover:bg-gray-100"
                    >
                      🔍 {each}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
        <div className="flex md:hidden shadow-md h-20">
          <img
            onClick={() => headerHandle()}
            src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png"
            alt="hamberger"
            className="h-8 m-5"
          />
          <input
            type="search"
            className="border border-gray-400 h-7 my-6 rounded-l-full outline-none p-2"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button
            className="border border-gray-400 h-7 my-6 px-2 rounded-r-full"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
        {mobileOpen && (
          <div className="w-full h-2/4 text-center">
            <h1
              // onClick={() => {
              //   navigate("/");
              // }}
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
