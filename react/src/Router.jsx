import { createBrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";

 

const router = createBrowserRouter([
    
    {
        path: '/Login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/users',
        element:<Users/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
])

export default router;