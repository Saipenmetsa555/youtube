import { useContext } from "react";
import Shimmer from "./Shimmer";
import useVideoData from "./utils/useHook";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import FilterContext from "./utils/UserContext";

const VideoContainer = () => {
  const dataHook = useVideoData();
  const { filteredData } = useContext(FilterContext);
  // console.log(dataHook);
  console.log(filteredData);
  if (dataHook.length === 0 || filteredData.length === 0)
    return (
      <div>
        <Shimmer />
      </div>
    );
  return (
    <div className="flex flex-wrap justify-center">
      {filteredData.length !== 0
        ? filteredData.map((each) => (
            <div key={each.id}>
              <Link to={"/watch?v=" + each.id.videoId} key={each.id}>
                <VideoCard data={each} key={each.id} />
              </Link>
            </div>
          ))
        : dataHook.map((each) => (
            <div key={each.id}>
              <Link to={"/watch?v=" + each.id} key={each.id}>
                <VideoCard data={each} key={each.id} />
              </Link>
            </div>
          ))}
    </div>
  );
};

export default VideoContainer;
//border border-red-950
