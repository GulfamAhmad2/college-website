import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Admissions from "./pages/Admissions.jsx";
import Resources from "./pages/Resources.jsx";
import Attendance from "./pages/Attendance.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Faculty from "./pages/Faculty.jsx";
import Director from "./pages/Director.jsx";
import Abouts from "./pages/Abouts.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Principal from "./pages/Principal.jsx";
import Staff from "./pages/Staff.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Abouts />,
        children:[
          {path:"/about", element:<AboutUs/>},
          {path:'director-msg',element:<Director/> },
          {path:'principle-msg',element:<Principal/> },
          {path:'staff',element:<Staff/> },

        ]
      },
      {
        path: "/admission",
        element: <Admissions />,
      },
      {
        path: "/faculty",
        element: <Faculty />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
