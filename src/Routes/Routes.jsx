import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
// import Azraelle from "../components/Pages/School/school";
// import erp from "../components/Pages/erp/erp";
import Chef from "../components/Pages/chef/chef";
import MyProjects from "../components/Pages/HomeSection/MyProjects/MyProjects";
import Blog from "../components/Pages/HomeSection/Blog/Blog";
import Erp from "../components/Pages/erp/erp";
import Restaurant from "../components/Pages/Restaurant/Restaurant";
import School from "../components/Pages/School/school";
// import AzaharMia from "../components/Pages/AzaharMia/AzaharMia";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/myproject",
        element: <MyProjects />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/school",
        element: <School />,
      },
      {
        path: "/erp",
        element: <Erp />,
      },
      {
        path: "/chef",
        element: <Chef />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
    ],
  },
]);

