import Shimmer from "./Shimmer";
import useVideoData from "./utils/useHook";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const dataHook = useVideoData();
  console.log(dataHook);
  if (dataHook.length === 0)
    return (
      <div>
        <Shimmer />
      </div>
    );
  return (
    <div className="flex flex-wrap justify-center">
      {dataHook.map((each) => (
        <div key={each.id}>
          <Link to={"/watch?v=" + each.id} key={each.id}>
            <VideoCard data={each} key={each.id} />
          </Link>
        </div>
      ))}
      {/* <VideoCard info={dataHook[0]} /> */}
    </div>
  );
};

export default VideoContainer;
//border border-red-950
