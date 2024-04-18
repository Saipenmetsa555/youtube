import SideBar from "./SideBar";
// import MainContainer from "./MainContainer";
// import SideBarSmall from "./SideBarSmall";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const toggle = useSelector((store) => store.app.isMenuOpen);
  // console.log(toggle);
  return (
    <>
      <div className="flex h-screen w-full">
        {toggle && <SideBar />}
        <Outlet />
      </div>
    </>
  );
};

export default Body;
