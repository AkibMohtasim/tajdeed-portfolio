import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
// import Education from "./components/Education/Education";
import Jobexp from "./components/Jobexp/Jobexp";
import Projects from "./components/Projects/Projects";
import Softwares from "./components/Softwares/Softwares";
import Activities from "./components/Activities/Activities";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home></Home> },
        // { path: "education", element: <Education></Education> },
        { path: "job-experience", element: <Jobexp></Jobexp> },
        { path: "projects", element: <Projects></Projects> },
        { path: "softwares", element: <Softwares></Softwares> },
        { path: "activities", element: <Activities></Activities> },
      ],
    },
    { path: "*", element: <div>404 Not Found</div> },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <div>
        <h2 className="text-light">this is the footer section</h2>
      </div>
    </div>
  );
}

export default App;
