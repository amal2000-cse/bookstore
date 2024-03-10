import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/Signup.JSX";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

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
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      
      {
        //this is a dynamic path : which will open when we click on different book and it will open up a page with the contents of that book
        path: "/book/:id",
        element: <SingleBook />,
        //now gettting the id and getting the data from the backend and sending to the next page using loader
        loader: ({ params }) =>
          fetch(`https://bookstore-tn2h.onrender.com/book/${params.id}`),
      },
      // {
      //   path: "/admin/dashboard",
      //   element: <DashboardLayout />,
      //   children: [
      //     {
      //       //here we are adding both the same path as we are adding private routing here
      //       path: "/admin/dashboard",
      //       element: <Dashboard />,
      //     },
      //     {
      //       path: "/admin/dashboard/upload",
      //       element: <UploadBooks />,
      //     },
      //     {
      //       path: "/admin/dashboard/manage",
      //       element: <ManageBooks />,
      //     },
      //     {
      //       path: "/admin/dashboard/edit-books/:id",
      //       element: <EditBooks />,
      //       //now gettting the id and getting the data from the backend and sending to the next page using loader
      //       loader: ({ params }) =>
      //         fetch(`http://localhost:5000/book/${params.id}`),
      //     },
         
      //   ],
      // },

      
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        //here we are adding both the same path as we are adding private routing here
        path: "/admin/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBooks />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        //now gettting the id and getting the data from the backend and sending to the next page using loader
        loader: ({ params }) =>
          fetch(`https://bookstore-tn2h.onrender.com/book/${params.id}`),
      },
     
    ],
  },
  {
    path: "sign-up",
    element: <SignUp/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "logout",
    element: <Logout/>,
  },

  {
    path: "*",
    element: <h1>404</h1>,
  }


]);

export default router;
