import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Blogs from "pages/Blogs/Blogs";
import Main from "pages/Main/Main";
import Posts from "pages/Posts/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Main /> },
      { path: "blogs", element: <Blogs /> },
      { path: "posts", element: <Posts /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
