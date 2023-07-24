import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import CollegeDetails from "../Home/CollegeDetails/CollegeDetails";
import AllColleges from "../Pages/Colleges/AllColleges";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import AllUsers from "../Dashboard/Users/AllUsers";
import AddColleges from "../Dashboard/AddColleges/AddColleges";
import Admission from "../Pages/Admission/Admission";
import AdmissionSubmit from "../Pages/AdmissionSubmit/AdmissionSubmit";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/Profile/EditProfile";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFound />,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/colleges/:collegeName',
            element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>
        }, 

        {
            path: '/colleges',
            element: <AllColleges></AllColleges>
        },
        {
            path: 'register',
            element: <Registration></Registration>
        }, 

        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path:'admission',
            element:<Admission />,
        },
        {
            path: '/admissionSubmit/:collegeName',
            element: <AdmissionSubmit></AdmissionSubmit>
        }, 
        {
            path: 'mycollege',
            element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
        },
        {
            path: 'profile',
            element: <Profile></Profile>
        },
        {
            path: '/edit-profile',
            element: <EditProfile></EditProfile>
        }
        
      ]
    },

    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addcollege',
                element: <AddColleges></AddColleges>
            }
        ]
    }
  ]);

  export default router;