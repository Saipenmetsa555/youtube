import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="hidden md:block w-1/5 overflow-y-scroll h-screen">
      <div className="border border-b-1 border-t-0 border-r-0 border-l-0 border-b-gray-400">
        <div className="flex mx-2 p-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
            alt="home"
          />
          <Link to="/">
            <h1 className="mt-1">Home</h1>
          </Link>
        </div>
        <div className="flex mx-2 p-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="https://i.pinimg.com/originals/02/cc/2d/02cc2df2074675a18e9edf1d1e3dbb43.png"
            alt="short"
          />
          <h1 className="mt-1">Shorts</h1>
        </div>
        <div className="flex mx-2 p-3  mb-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="https://cdn.iconscout.com/icon/free/png-256/free-subscriptions-1781681-1518361.png"
            alt="sub"
          />
          <h1 className="mt-1">Subscriptions</h1>
        </div>
      </div>
      <div className="border border-b-1 border-t-0 border-r-0 border-l-0 border-b-gray-400">
        <h1 className="pb-3 pl-5 text-2xl font-bold">You</h1>
        <div className="flex mx-2 p-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
            alt="user"
          />
          <h1 className="mt-1">Your Channel</h1>
        </div>
        <div className="flex mx-2 p-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="https://static-00.iconduck.com/assets.00/history-icon-2048x1863-258qellh.png"
            alt="user"
          />
          <h1 className="mt-1">History</h1>
        </div>
        <div className="flex mx-2 p-3 cursor-pointer">
          <img
            className="h-7 mr-8"
            src="https://banner2.cleanpng.com/20180603/qkw/kisspng-computer-icons-playlist-symbol-5b1389d4de1724.7654114815280071249097.jpg"
            alt="user"
          />
          <h1 className="mt-1">Playlist</h1>
        </div>
        <div className="flex mx-2 p-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111795.png"
            alt="user"
          />
          <h1 className="mt-1">Your Videos</h1>
        </div>
        <div className="flex mx-2 p-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="https://w7.pngwing.com/pngs/864/328/png-transparent-later-watch-ic-google-material-design-3-icon.png"
            alt="user"
          />
          <h1 className="mt-1">Watch Later</h1>
        </div>
        <div className="flex mx-2 p-3 mb-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="https://icon2.cleanpng.com/20180616/rwg/kisspng-computer-icons-facebook-like-button-clip-art-like-icon-5b24ba273edd16.6123846115291336072575.jpg"
            alt="user"
          />
          <h1 className="mt-1">Liked Videos</h1>
        </div>
      </div>
      <div className="border border-b-1 border-t-0 border-r-0 border-l-0 border-b-gray-400">
        <h1 className="pb-3 pl-5 text-2xl font-bold">Subscriptions</h1>
        <div className="flex mx-2 p-3 mb-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="https://w7.pngwing.com/pngs/803/536/png-transparent-musical-note-icon-music-angle-white-text-thumbnail.png"
            alt="user"
          />
          <h1 className="mt-1">Music</h1>
        </div>
        <div className="flex mx-2 p-3 mb-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="data:image/png;base64,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"
            alt="user"
          />
          <h1 className="mt-1">Sports</h1>
        </div>
        <div className="flex mx-2 p-3 mb-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="https://e7.pngegg.com/pngimages/290/223/png-clipart-game-controller-video-game-computer-icons-youtube-like-button-play-video-games-icon-miscellaneous-game-thumbnail.png"
            alt="user"
          />
          <h1 className="mt-1">Gaming</h1>
        </div>
        <div className="flex mx-2 p-3 mb-3 cursor-pointer">
          <img
            className="h-8 mr-8"
            src="https://p7.hiclipart.com/preview/198/289/143/google-play-movies-tv-youtube-film-youtube.jpg"
            alt="user"
          />
          <h1 className="mt-1">Movies</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
