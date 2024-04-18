import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const mobileOpen = useSelector((store) => store.app.mobileOpen);
  return (
    <div className="w-screen overflow-y-scroll">
      {!mobileOpen && (
        <>
          <ButtonList />
          <VideoContainer />
        </>
      )}
    </div>
  );
};

export default MainContainer;
