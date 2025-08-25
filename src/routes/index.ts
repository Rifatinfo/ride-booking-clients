import App from "@/App";
import Login from "@/pages/Login";
import { Home } from "lucide-react";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: Home,
                path: "/",
            }
        ]
    },
    {
        Component: Login,
        path: "/login",
    }
]);