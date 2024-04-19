import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const mobileOpen = useSelector((store) => store.app.mobileOpen);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <>
      {/* <div className="w-full md:w-screen"> */}
      {/* <div className="relative" style={{ paddingTop: "56.25%" }}> */}
      {!mobileOpen && (
        <div className="flex flex-col border border-red-900 w-screen h-screen">
          <iframe
            // className="absolute inset-0 w-full h-4/5 md:w-3/5 md:h-2/4 md:m-5"
            className="md:h-3/5 md:w-2/3 md:ml-4 w-full"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <Comments />
        </div>
      )}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default WatchPage;
