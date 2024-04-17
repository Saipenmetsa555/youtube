import useVideoData from "./utils/useHook";

const Shimmer = () => {
  const data = useVideoData();
  return (
    <div className="flex flex-wrap justify-center">
      {Array(data.length)
        .fill("")
        .map((each) => (
          <div
            key={each.index}
            className="flex flex-wrap size-64 m-3 p-2 rounded-md bg-gray-400 shadow-lg"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
