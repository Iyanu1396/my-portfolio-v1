import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
