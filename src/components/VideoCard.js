import { useContext } from "react";
import FilterContext from "./utils/UserContext";

const VideoCard = ({ data }) => {
  const { filteredData } = useContext(FilterContext);
  // console.log(data);
  const { snippet, statistics } = data;
  const { localized, thumbnails } = snippet;
  // console.log(localized, thumbnails);
  // console.log(statistics);

  if (filteredData.length !== 0) {
    return (
      <div className="flex flex-wrap w-80 sm:w-60 h-66  m-3 p-2 rounded-md shadow-lg">
        <img src={thumbnails?.medium?.url} alt="video-thumb" />
        <h1 className="font-bold">{snippet?.title}</h1>
        <h4>{snippet?.channelTitle}</h4>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap w-80 sm:w-60 h-66  m-3 p-2 rounded-md shadow-lg">
      <img src={thumbnails?.medium?.url} alt="video-thumb" />
      <h1 className="font-bold">{localized?.title}</h1>
      <h4>{"views: " + statistics?.viewCount}</h4>
    </div>
  );
};

export default VideoCard;
