import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import FilterContext from "./components/utils/UserContext";
import { useState } from "react";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  const [filteredData, setFilteredData] = useState([]);
  return (
    <Provider store={store}>
      <FilterContext.Provider value={{ filteredData, setFilteredData }}>
        <div className="h-screen">
          <Head />
          <RouterProvider router={appRouter} />
        </div>
      </FilterContext.Provider>
    </Provider>
  );
};

export default App;
