import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";
import VerifyFrontPage from "@/pages/VerifyFrontPage";
import HomeHero from "@/components/modules/home/HomeHero";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: HomeHero,
                path: "/",
            }
        ]
    },
    {
        Component: Login,
        path: "/login",
    },
    {
        Component: Register,
        path: "/register",
    },
    {
        Component: VerifyFrontPage,
        path: "/verify",
    }
]);