import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-screen overflow-y-scroll">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
