import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";
import VerifyFrontPage from "@/pages/VerifyFrontPage";
import HomeHero from "@/components/modules/home/HomeHero";
import ContactUs from "@/components/modules/contactUs/ContactUs";
import FAQ from "@/components/modules/faq/FAQ";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: HomeHero,
                path: "/",
            },
            {
                Component: ContactUs,
                path: "/contact",
            },
            {
                Component: FAQ,
                path: "/faq",
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