import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthLayout from "../layouts/Auth";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import DefaultLayout from "../layouts/Default";
import Servers from "../pages/Server/Servers";
import Server from "../pages/Server/Server";
import {Settings} from "../pages/Settings";
import {Profile} from "../pages/Profile";

const Router = () => {
    const BrowserRoutes = createBrowserRouter([
        {
            path: 'auth',
            element: <AuthLayout />,
            children: [
                {
                    path: 'sign-in',
                    element: <SignIn />
                },
                {
                    path: 'sign-up',
                    element: <SignUp />
                }
            ]
        },
        {
            path: '/',
            element: <DefaultLayout />,
            children: [
                {
                    index: true,
                    element: <Servers />
                },
                {
                    path: 'server',
                    element: <Server />
                },
                {
                    path: 'profile',
                    element: <Profile/>
                },
                {
                    path: 'settings',
                    element: <Settings/>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={BrowserRoutes}/>
    )
}

export default Router;
