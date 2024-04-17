import { useEffect, useState } from "react";
import { Youtube_API } from "./constant";

const useVideoData = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(Youtube_API);
    const data = await response.json();
    setVideo(data.items);
  };

  return video;
};

export default useVideoData;
