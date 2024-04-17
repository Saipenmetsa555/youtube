const SideBarSmall = () => {
  return (
    <div className="w-25 h-screen">
      <div className="w-1/7 border border-green-100 mx-2 p-3 cursor-pointer">
        <img
          className="h-7"
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          alt="home"
        />
        <h1 className="mt-1 text-sm">Home</h1>
      </div>
      <div className="mx-2 p-3 cursor-pointer">
        <img
          className="h-7"
          src="https://i.pinimg.com/originals/02/cc/2d/02cc2df2074675a18e9edf1d1e3dbb43.png"
          alt="short"
        />
        <h1 className="mt-1 text-sm">Shorts</h1>
      </div>
      <div className="mx-2 p-3  mb-3 cursor-pointer">
        <img
          className="h-7"
          src="https://cdn.iconscout.com/icon/free/png-256/free-subscriptions-1781681-1518361.png"
          alt="sub"
        />
        <h1 className="mt-1 text-sm">Subscriptions</h1>
      </div>
      <div className="mx-2 p-3  mb-3 cursor-pointer">
        <img
          className="h-7"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111795.png"
          alt="sub"
        />
        <h1 className="mt-1 text-sm">You</h1>
      </div>
    </div>
  );
};

export default SideBarSmall;
