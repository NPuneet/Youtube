import Head from "./Components/Head";
import MainContainer from "./Components/MainContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body.jsx";
import WatchPage from "./Components/WatchPage.jsx";

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

function App() {
  return (
    <>
      <Head />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
