const VideoCard = ({ data }) => {
  // console.log(data);
  const { snippet, statistics } = data;
  const { localized, thumbnails } = snippet;
  // console.log(localized, thumbnails);
  // console.log(statistics);
  return (
    <div className="flex flex-wrap w-60 h-66 m-3 p-2 rounded-md shadow-lg">
      <img src={thumbnails?.medium?.url} alt="video-thumb" />
      <h1 className="font-bold">{localized?.title}</h1>
      <h4>{"views: " + statistics?.viewCount}</h4>
    </div>
  );
};

export default VideoCard;
